package com.pretzl.repository;

import com.pretzl.models.Discussion;
import com.pretzl.models.IAnalytics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiscussionRepository extends JpaRepository<Discussion, Long> {
    @Query(value = "select date as date,action_type as action_type,count(username) as count FROM discussions where parent_discussion_id in (SELECT discussion_id FROM discussions where username = :username and parent_discussion_id is null) group by date, action_type", nativeQuery = true)
    List<IAnalytics> getAllPosts(@Param("username") String username);
}
