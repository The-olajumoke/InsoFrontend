package com.pretzl.payload.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

public class SignupRequest {

    @NotBlank
    @Size(min = 3, max = 20)
    private String firstName;

    @NotBlank
    @Size(min = 3, max = 20)
    private String lastName;

    @NotBlank
    @Size(min = 3, max = 50)
    private String userName;

    @Size(min = 3, max = 20)
    private String phoneNumber;

    @NotBlank
    @Size(min = 3, max = 20)
    private String primarilyUse;

    @NotBlank
    @Size(min = 3, max = 20)
    private String occupation;

    private boolean receiveInsoUpdates;

    @NotBlank
    @Size(max = 50)
    @Email
    private String alternativeEmail;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    private Set<String> role;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

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

    public Set<String> getRole() {
        return this.role;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPrimarilyUse() {
        return primarilyUse;
    }

    public void setPrimarilyUse(String primarilyUse) {
        this.primarilyUse = primarilyUse;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public boolean isReceiveInsoUpdates() {
        return receiveInsoUpdates;
    }

    public void setReceiveInsoUpdates(boolean receiveInsoUpdates) {
        this.receiveInsoUpdates = receiveInsoUpdates;
    }

    public String getAlternativeEmail() {
        return alternativeEmail;
    }

    public void setAlternativeEmail(String alternativeEmail) {
        this.alternativeEmail = alternativeEmail;
    }

    public void setRole(Set<String> role) {
        this.role = role;
    }
}
