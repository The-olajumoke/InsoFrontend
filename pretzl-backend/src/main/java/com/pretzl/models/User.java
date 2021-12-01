package com.pretzl.models;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users"/*,
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        }*/)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 50)
    private String username;

    
    @Size(max = 50)
    @Email
    private String email;

    
    @Size(max = 120)
    private String password;

    
    @Size(min = 3, max = 20)
    private String firstname;

    
    @Size(min = 3, max = 20)
    private String lastname;

    @Size(min = 3, max = 20)
    private String phonenumber;


    @Size(min = 3, max = 20)
    private String primarilyuse;


    @Size(min = 3, max = 20)
    private String occupation;

    private boolean receiveinsoupdates;


    @Size(max = 50)
    @Email
    private String alternativeemail;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User() {
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }


    public String getFirstName() {
        return firstname;
    }

    public void setFirstName(String firstName) {
        this.firstname = firstName;
    }

    public String getLastName() {
        return lastname;
    }

    public void setLastName(String lastName) {
        this.lastname = lastName;
    }

    public String getPhoneNumber() {
        return phonenumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phonenumber = phoneNumber;
    }

    public String getPrimarilyUse() {
        return primarilyuse;
    }

    public void setPrimarilyUse(String primarilyUse) {
        this.primarilyuse = primarilyUse;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public boolean isReceiveInsoUpdates() {
        return receiveinsoupdates;
    }

    public void setReceiveInsoUpdates(boolean receiveInsoUpdates) {
        this.receiveinsoupdates = receiveInsoUpdates;
    }

    public String getAlternativeEmail() {
        return alternativeemail;
    }

    public void setAlternativeEmail(String alternativeEmail) {
        this.alternativeemail = alternativeEmail;
    }

}
