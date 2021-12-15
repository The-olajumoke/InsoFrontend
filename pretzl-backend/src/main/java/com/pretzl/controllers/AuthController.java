package com.pretzl.controllers;

import com.pretzl.models.Discussion;
import com.pretzl.models.*;
import com.pretzl.payload.request.*;
import com.pretzl.payload.response.JwtResponse;
import com.pretzl.payload.response.MessageResponse;
import com.pretzl.repository.DiscussionDetailsRepository;
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
import java.time.LocalDate;
import java.util.*;
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
    DiscussionDetailsRepository discussionDetailsRepository;

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
        String userName = String.format("%s.%s", signUpRequest.getFirstName(), signUpRequest.getLastName());
        int i = 1;
        while (userRepository.existsByUsername(userName)) {
            userName = userName.replaceAll("\\d+$", "") + i++;
        }

        // Create new user's account
        User user = new User(userName,
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));
        user.setFirstName(signUpRequest.getFirstName());
        user.setLastName(signUpRequest.getLastName());

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
        User userDetails = userRepository.save(user);

        return ResponseEntity.ok(userDetails);
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
//        return ResponseEntity.ok(discussionRepository.getUserDiscussions(username));
        return ResponseEntity.ok(discussionRepository.getUserDiscussionsByUserName(username));
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

    @PostMapping("/create/discussions")
    public ResponseEntity<?> createDiscussions(@Valid @RequestBody DiscussionsRequest discussionsRequest) {
        Map<String, List<com.pretzl.payload.request.Discussion>> discMap = discussionsRequest.getDiscussions().stream().collect(Collectors.groupingBy(com.pretzl.payload.request.Discussion::getSetDescription));
        discMap.forEach((setDescription, discussions) -> {
            String finalSet_id = UUID.randomUUID().toString();
            Discussion discSetModel = new Discussion();
            discSetModel.setDate(LocalDate.now().toString());
            discSetModel.setDescription(setDescription);
            discSetModel.setUsername(discussionsRequest.getUsername());
            discSetModel.setSet_id(finalSet_id);
            discSetModel.setAction_type("S");

            discSetModel.setNumber((int) (Math.random() * (1L - 10 + 1) + 10));
            discussionRepository.save(discSetModel);

            discussions.forEach(discussion -> {
                Discussion discModel = new Discussion();
                discModel.setDate(LocalDate.now().toString());
                discModel.setDescription(discussion.getDescription());
                discModel.setUsername(discussionsRequest.getUsername());
                discModel.setSet_id(finalSet_id);
                discModel.setAction_type("D");
                discModel.setNumber((int) (Math.random() * (1L - 11 + 1) + 11));
                discussionRepository.save(discModel);
            });
        });

        return ResponseEntity
                .ok()
                .body(new MessageResponse("Discussions are created successfully"));
    }

    @PostMapping("/edit/discussions")
    public ResponseEntity<List<DiscussionDetail>> editDiscussions(@Valid @RequestBody UpdateDiscussionsRequest updateDiscussionsRequest) {
        String set_id = updateDiscussionsRequest.getSet_id();
        List<DiscussionDetail> discussionDetails = new ArrayList<>();
        updateDiscussionsRequest.getUpdateDiscussions().forEach(updateDiscussion -> {
                    discussionDetails.addAll(updateDiscussion.getScores().getActions().stream()
                            .map(actions -> updateDiscussion.getDiscussionDetail(set_id, actions))
                            .collect(Collectors.toList()));
                    updateDiscussion.getPostAs().forEach(postAs -> discussionDetails.add(updateDiscussion.getDiscussionDetailPostAs(set_id,postAs)));
                }

        );

        List<DiscussionDetail> discussionDetails1 = discussionDetailsRepository.saveAll(discussionDetails);
        discussionDetails1.forEach(discussionDetail1 -> System.out.println("Successfully updated for :" + discussionDetail1.getType() + " " + discussionDetail1.getScore()));
        return ResponseEntity
                .ok()
                .body(discussionDetails1);
    }

}
