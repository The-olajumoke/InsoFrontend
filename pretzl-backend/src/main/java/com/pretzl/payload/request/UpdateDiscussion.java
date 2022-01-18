package com.pretzl.payload.request;

import com.pretzl.models.DiscussionDetail;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@NoArgsConstructor
public class UpdateDiscussion {
    private String discussion_id;
    private String starterPrompt;
    private List<PostInspiration> postInspirations;
    private List<String> postAs;
    private String startDate;
    private String closeDate;
    private Score scores;

    public DiscussionDetail getDiscussionDetail(String set_id, Actions actions) {
        DiscussionDetail discussionDetail = new DiscussionDetail();
        discussionDetail.setDiscussion_id(getDiscussion_id());
        discussionDetail.setStarter_prompt(getStarterPrompt());
        discussionDetail.setSet_id(set_id);
        discussionDetail.setStart_date(getStartDate());
        discussionDetail.setClose_date(getCloseDate());
        discussionDetail.setPost_inspiration(getPostInspirations().stream().map(PostInspiration::getType).toArray(String[]::new));
        discussionDetail.setScore(actions.getScore());
        String actionsType = actions.getType();
        if (actionsType == null) {
            discussionDetail.setType("Rubric");
        } else if (actionsType.equalsIgnoreCase("Scores")) {
            discussionDetail.setType("SS");
        } else if (actionsType.equalsIgnoreCase("Reactions")) {
            discussionDetail.setType("SR");
        } else {
            discussionDetail.setType("SU");
        }
        if (actions.getCriteria() != null) {
            discussionDetail.setCriteria(actions.getCriteria().toArray(new String[0]));
        } else {
            discussionDetail.setCriteria(new String[0]);
        }
        return discussionDetail;
    }

    public DiscussionDetail getDiscussionDetailPostAs(String set_id, String postAs) {

        DiscussionDetail discussionDetail = new DiscussionDetail();
        discussionDetail.setDiscussion_id(getDiscussion_id());
        discussionDetail.setSet_id(set_id);
        discussionDetail.setStart_date(getStartDate());
        discussionDetail.setClose_date(getCloseDate());
        discussionDetail.setType("PA");
        discussionDetail.setStarter_prompt(getStarterPrompt());
        discussionDetail.setCriteria(new String[0]);
        discussionDetail.setPost_inspiration(getPostInspirations().stream()
                .map(PostInspiration::getType).
                toArray(String[]::new));
        discussionDetail.setPost_as(postAs);
        return discussionDetail;
    }
}
