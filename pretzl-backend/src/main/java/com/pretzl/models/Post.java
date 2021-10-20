package com.pretzl.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "posts",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "post_id")
        })

public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long post_id;

    @NotBlank
    @Size(max = 50)
    private String username;

    @NotBlank
    private String post_desc;

    public Long getPost_id() {
        return post_id;
    }

    public void setPost_id(Long post_id) {
        this.post_id = post_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPost_desc() {
        return post_desc;
    }

    public void setPost_desc(String post_desc) {
        this.post_desc = post_desc;
    }

    public Post(Long post_id, String username, String post_desc) {
        this.post_id = post_id;
        this.username = username;
        this.post_desc = post_desc;
    }
}
