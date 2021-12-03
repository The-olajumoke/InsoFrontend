package com.pretzl.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Entity
@Table(name = "discussions",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "id")
        })

public class Discussion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int number;

    @NotBlank
    @Size(max = 50)
    private String username;

    private String description;

    @NotBlank
    private String action_type;

    @NotBlank
    private String date;

    private int parent_id;

    private int word_count;

    private String post_as;

    private String time_of_day;

    private String tags;

    private String id;

    private String set_id;


    public Discussion(int number, String username, String description, String action_type, String date, int parent_id,
                      int word_count, String post_as, String time_of_day, String tags, String id, String set_id) {
        this.number = number;
        this.username = username;
        this.description = description;
        this.action_type = action_type;
        this.date = date;
        this.parent_id = parent_id;
        this.word_count = word_count;
        this.post_as = post_as;
        this.time_of_day = time_of_day;
        this.tags = tags;
        this.id = id;
        this.set_id = set_id;
    }

    public Discussion() {

    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAction_type() {
        return action_type;
    }

    public void setAction_type(String action_type) {
        this.action_type = action_type;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getParent_id() {
        return parent_id;
    }

    public void setParent_id(int parent_id) {
        this.parent_id = parent_id;
    }

    public int getWord_count() {
        return word_count;
    }

    public void setWord_count(int word_count) {
        this.word_count = word_count;
    }

    public String getPost_as() {
        return post_as;
    }

    public void setPost_as(String post_as) {
        this.post_as = post_as;
    }

    public String getTime_of_day() {
        return time_of_day;
    }

    public void setTime_of_day(String time_of_day) {
        this.time_of_day = time_of_day;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSet_id() {
        return set_id;
    }

    public void setSet_id(String set_id) {
        this.set_id = set_id;
    }
}
