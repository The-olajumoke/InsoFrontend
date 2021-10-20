package com.pretzl.models;

import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Null;
import javax.validation.constraints.Size;


@Entity
@Table(name = "discussions",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "discussion_id")
        })

public class Discussion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int discussion_id;

    @NotBlank
    @Size(max = 50)
    private String username;

    private String discussion_desc;

    @NotBlank
    private String action_type;

    @NotBlank
    private String date;

    private String parent_discussion_id;

    private int word_count;

    private String post_as;

    private String time_of_day;

    private String tags;

    public Discussion(int discussion_id, String username, String discussion_desc, String action_type, String date, String parent_discussion_id, int word_count, String post_as, String time_of_day, String tags) {
        this.discussion_id = discussion_id;
        this.username = username;
        this.discussion_desc = discussion_desc;
        this.action_type = action_type;
        this.date = date;
        this.parent_discussion_id = parent_discussion_id;
        this.word_count = word_count;
        this.post_as = post_as;
        this.time_of_day = time_of_day;
        this.tags = tags;
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

    public int getDiscussion_id() {
        return discussion_id;
    }

    public void setDiscussion_id(int discussion_id) {
        this.discussion_id = discussion_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDiscussion_desc() {
        return discussion_desc;
    }

    public void setDiscussion_desc(String discussion_desc) {
        this.discussion_desc = discussion_desc;
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

    public String getParent_discussion_id() {
        return parent_discussion_id;
    }

    public void setParent_discussion_id(String parent_discussion_id) {
        this.parent_discussion_id = parent_discussion_id;
    }

    public Discussion(){

    }
}
