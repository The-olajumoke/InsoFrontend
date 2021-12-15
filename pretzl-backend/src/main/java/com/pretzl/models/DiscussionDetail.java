package com.pretzl.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "discussion_details",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "discussion_id")
        })

public class DiscussionDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "hibernate_sequence")
    /*@SequenceGenerator(name="hibernate_sequence",
            sequenceName="hibernate_sequence",
            allocationSize=1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator="hibernate_sequence")
    @Column(name = "sequenceNumber", updatable=false)*/
//    @GeneratedValue(generator="hibernate_sequence",strategy=GenerationType.IDENTITY)
    private int id;

    @NotBlank
    @Size(max = 50)
    private String discussion_id;

    @NotBlank
    private String set_id;

    private String type;

    private int starter_prompt;

    @Column(columnDefinition = "character varying[]")
    @Type(type = "com.pretzl.models.PostgreSqlStringArrayType")
    private String[] post_inspiration;


    @Column(columnDefinition = "character varying[]")
    @Type(type = "com.pretzl.models.PostgreSqlStringArrayType")
    private String[] post_as;

    private int score;

    @Column(columnDefinition = "character varying[]")
    @Type(type = "com.pretzl.models.PostgreSqlStringArrayType")
    private String[] criteria;

    private String start_date;

    private String close_date;

    private int total_score;

}
