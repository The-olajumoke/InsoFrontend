package com.pretzl.payload.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class Score {
    private String type;
    private List<Actions> actions;
    private int totalScore;
}
