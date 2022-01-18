package com.pretzl.payload.response;

import com.pretzl.models.Discussion;
import com.pretzl.models.DiscussionDetail;
import com.pretzl.payload.request.UpdateDiscussion;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class GetDiscussionsResponse {
    private List<Discussion> userDiscussionsById;
    private UpdateDiscussion updateDiscussion;
}
