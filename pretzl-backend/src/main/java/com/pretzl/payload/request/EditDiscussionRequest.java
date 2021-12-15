package com.pretzl.payload.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class EditDiscussionRequest {
    private String set_id;
    private String discussion_id;
    private String starterPrompt;
    private List<PostInspiration> postInspirations;
    private List<String> postAs;
    private String startDate;
    private String closeDate;
    private Score scores;
}
