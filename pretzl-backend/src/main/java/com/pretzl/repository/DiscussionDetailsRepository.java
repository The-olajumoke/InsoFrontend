package com.pretzl.repository;

import com.pretzl.models.Discussion;
import com.pretzl.models.DiscussionDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DiscussionDetailsRepository extends JpaRepository<DiscussionDetail, Long> {
    @Query(value="select * FROM discussion_details where discussion_id = :discussionId ", nativeQuery = true)
    List<DiscussionDetail> getUserDiscussionsById(String discussionId);

    @Query(value="delete FROM discussion_details where discussion_id = :discussionId ", nativeQuery = true)
    void deleteUserDiscussionsById(String discussionId);
}
