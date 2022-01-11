package com.pretzl.payload.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

public class GuestLoginRequest {

    @Size(max = 50)
    @Email
    private String email;

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

}
