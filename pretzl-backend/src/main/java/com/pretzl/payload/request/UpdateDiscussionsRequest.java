package com.pretzl.payload.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UpdateDiscussionsRequest {
    private String set_id;
    private List<UpdateDiscussion> updateDiscussions;
}
