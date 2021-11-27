package com.pretzl.repository;

import com.pretzl.models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiscussionRepository extends JpaRepository<Discussion, Long> {

    @Query(value = "select count(number) as count FROM discussions where set_id in (SELECT id FROM discussions where username = :username) and username != :username and action_type='P' ", nativeQuery = true)
    ICounts getUserPostCount(@Param("username") String username);

    @Query(value = "select count(distinct id)  as count FROM discussions where username = :username and action_type='S'", nativeQuery = true)
    ICounts getUserDiscussionSetsCount(@Param("username") String username);

    @Query(value = "select count(distinct id) as count FROM discussions where set_id in (SELECT id FROM discussions where username = :username) and username != :username", nativeQuery = true)
    ICounts getDiscussionUserCount(@Param("username") String username);

    @Query(value = "select count(description) as count FROM discussions where set_id in (SELECT id FROM discussions where username = :username and action_type='S') and action_type='D' ", nativeQuery = true)
    ICounts getUserDiscussionCount(@Param("username") String username);

    @Query(value="select date as date,action_type as action_type,count(username) as count FROM discussions where id in (SELECT id FROM discussions where username = :username and action_type='D') and username != :username and (action_type='P' OR action_type='R') group by date, action_type", nativeQuery = true)
    List<IReactions> getReactions(@Param("username") String username);

    @Query(value="select count(username) as count FROM discussions where id in (SELECT id FROM discussions where username = :username and action_type='D') and username != :username and (action_type='P' OR action_type='R')", nativeQuery = true)
    List<IReactions> getReactionsCount(@Param("username") String username);

    @Query(value = "select id as id,description as description FROM discussions where username = :username and action_type='S'", nativeQuery = true)
    List<IDiscussionSet> getUserDiscussionSets(@Param("username") String username);

    @Query(value = "select username as username,description as description,date as date FROM discussions where set_id in (SELECT id FROM discussions where username = :username and action_type='S') and action_type='D' ", nativeQuery = true)
    List<IDiscussions> getUserDiscussions(@Param("username") String username);


    @Query(value="select username as username,description as description,date as date FROM discussions where id in (SELECT id FROM discussions where username = :username and action_type='D') and username != :username and action_type='P'", nativeQuery = true)
    List<IDiscussions> getDiscussionPostDetails(@Param("username") String username);


    @Query(value="select * FROM discussions where set_id in (SELECT id FROM discussions where username = :username and action_type='S')", nativeQuery = true)
    List<Discussion> getAllDiscussions(@Param("username") String username);


    @Query(value="select id as id,description as description FROM discussions where set_id in (SELECT id FROM discussions where username = :username and action_type='S') and (action_type ='P' or action_type='R')", nativeQuery = true)
    List<IThreads> getAllThreads(@Param("username") String username);
}
