package com.pretzl.payload.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class Actions {
    private String type;
    private int score;
    private List<String> criteria;
}