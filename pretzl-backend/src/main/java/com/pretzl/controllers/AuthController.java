package com.pretzl.controllers;

import com.pretzl.models.*;
import com.pretzl.payload.request.LoginRequest;
import com.pretzl.payload.request.SignupRequest;
import com.pretzl.payload.response.JwtResponse;
import com.pretzl.payload.response.MessageResponse;
import com.pretzl.repository.DiscussionRepository;
import com.pretzl.repository.RoleRepository;
import com.pretzl.repository.UserRepository;
import com.pretzl.security.jwt.JwtUtils;
import com.pretzl.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    DiscussionRepository discussionRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles, String.format("%s_%s", userDetails.getUsername(), userDetails.getId())));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already taken!"));
        }
        String userName = "";
        Optional<User> userRepositoryByEmail = userRepository.findByEmail(signUpRequest.getEmail());
        if (userRepositoryByEmail.isPresent()) {
            userName = signUpRequest.getFirstName().substring(0, 1).toLowerCase() + signUpRequest.getLastName().toLowerCase();
            int i = 1;
            while (userRepository.existsByUsername(userName)) {
                userName = userName.replaceAll("\\d+$", "") + i++;
            }
        }

        // Create new user's account
        User user = new User(userName,
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));
       /* user.setFirstName(signUpRequest.getFirstName());
        user.setLastName(signUpRequest.getLastName());
        user.setAlternativeEmail(signUpRequest.getAlternativeEmail());
        user.setOccupation(signUpRequest.getOccupation());
        user.setPrimarilyUse(signUpRequest.getPrimarilyUse());
        user.setPhoneNumber(signUpRequest.getPhoneNumber());
        user.setReceiveInsoUpdates(signUpRequest.isReceiveInsoUpdates());*/


        Set<String> strRoles = null;
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "guest":
                        Role modRole = roleRepository.findByName(ERole.GUEST)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        try {
            userRepository.save(user);
        } catch (Exception e) {
            String usernameNew = user.getUsername();
            usernameNew = usernameNew.replaceAll("\\d+$", "") + Math.random();
            user.setUsername(usernameNew);
            userRepository.save(user);
        }

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @GetMapping("/analytics")
    public ResponseEntity<?> registerUser(@RequestParam String username) {
        return ResponseEntity.ok(discussionRepository.getUserPostCount(username));
    }

    @GetMapping("/discussion/posts/count")
    public ResponseEntity<ICounts> userPostCount(@RequestParam String username) {
        return ResponseEntity.ok(discussionRepository.getUserPostCount(username));
    }

    @GetMapping("/discussion/users/count")
    public ResponseEntity<ICounts> getUserDiscussionCount(@RequestParam String username) {
        return ResponseEntity.ok(discussionRepository.getDiscussionUserCount(username));
    }

    @GetMapping("/discussion/sets/count")
    public ResponseEntity<ICounts> getUserDiscussionSetCount(@RequestParam String username) {
        return ResponseEntity.ok(discussionRepository.getUserDiscussionSetsCount(username));
    }

    @GetMapping("/discussion/discussions/count")
    public ResponseEntity<ICounts> getUserDiscussionsCount(@RequestParam String username) {
        return ResponseEntity.ok(discussionRepository.getUserDiscussionCount(username));
    }

    @GetMapping("/discussion/postreactions/count")
    public ResponseEntity<List<IReactions>> userPosts(@RequestParam String username) {
        return ResponseEntity.ok(discussionRepository.getReactions(username));
    }

    @GetMapping("/discussion/postreactions")
    public ResponseEntity<List<IReactions>> postreactions(@RequestParam String username) {
        return ResponseEntity.ok(discussionRepository.getReactions(username));
    }

    @GetMapping("/discussion/sets")
    public ResponseEntity<List<IDiscussionSet>> getUserDiscussionSet(@RequestParam String username) {
        return ResponseEntity.ok(discussionRepository.getUserDiscussionSets(username));
    }

    @GetMapping("/discussion/discussions")
    public ResponseEntity<List<IDiscussions>> getUserDiscussions(@RequestParam String username) {
        return ResponseEntity.ok(discussionRepository.getUserDiscussions(username));
    }

    @GetMapping("/discussion/post/details")
    public ResponseEntity<List<IDiscussions>> getDiscussionPostDetails(@RequestParam String username) {
        return ResponseEntity.ok(discussionRepository.getDiscussionPostDetails(username));
    }

    @GetMapping("/discussion/all")
    public ResponseEntity<List<Discussion>> getAllDiscussion(@RequestParam String username) {
        List<Discussion> discussionList = discussionRepository.getAllDiscussions(username);
        discussionList.stream().collect(Collectors.groupingBy(Discussion::getSet_id));
        return ResponseEntity.ok(discussionList);
    }

    @GetMapping("/threads/all")
    public ResponseEntity<List<IThreads>> getAllThreads(@RequestParam String username) {
        List<IThreads> allThreads = discussionRepository.getAllThreads(username);
        return ResponseEntity.ok(allThreads);
    }
}
