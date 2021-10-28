package com.pretzl.repository;

import com.pretzl.models.Discussion;
import com.pretzl.models.IAnalytics;
import com.pretzl.models.IDiscussionSet;
import com.pretzl.models.IDiscussions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiscussionRepository extends JpaRepository<Discussion, Long> {

    @Query(value = "select date as date,action_type as action_type,count(username) as count FROM discussions where parent_id in (SELECT number FROM discussions where username = :username) group by date, action_type", nativeQuery = true)
    List<IAnalytics> getAllPosts(@Param("username") String username);

    @Query(value = "select id as id,description as description FROM discussions where username = :username and action_type='S'", nativeQuery = true)
    List<IDiscussionSet> getUserDiscussionSets(@Param("username") String username);

    @Query(value = "select distinct username FROM discussions where set_id in (SELECT id FROM discussions where username = :username)", nativeQuery = true)
    List<String> getDiscussionUsers(@Param("username") String username);

    @Query(value = "select username as username,description as description,date as date  FROM discussions where set_id in (SELECT id FROM discussions where username = :username and action_type='S')", nativeQuery = true)
    List<IDiscussions> getUserDiscussions(@Param("username") String username);
}
