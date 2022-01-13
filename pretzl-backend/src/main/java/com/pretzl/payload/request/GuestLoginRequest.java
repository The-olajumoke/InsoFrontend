package com.pretzl.payload.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Setter
@Getter
public class GuestLoginRequest {

    @Size(min = 3, max = 20)
    private String firstName;

    @Size(min = 3, max = 20)
    private String lastName;

    @Size(max = 50)
    @Email
    private String email;

}
