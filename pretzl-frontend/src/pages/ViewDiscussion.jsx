import React, { useState, useEffect } from "react";
import BodyWrapper from "../components/BodyWrapper";
import { useParams } from "react-router-dom";
import "../Styling/viewDiscussion.css";
import vec1 from "../Exports/vec1.svg";
import vec2 from "../Exports/vec2.svg";
import { FiArrowLeft } from "react-icons/fi";
import ViewDisTemp from "../components/Discussion/ViewDisTemp";
import ViewCommentTemp from "../components/Discussion/ViewCommentTemp";
import history from "../utils/history";
import textFormat from "../Exports/comment/text_format.svg";
import attFile from "../Exports/comment/attach_file.svg";
import assessment from "../Exports/comment/assessment.svg";
import insertPhoto from "../Exports/comment/insert_photo.svg";
import smile from "../Exports/comment/sentiment_satisfied_alt.svg";
import cameraAlt from "../Exports/comment/camera_alt.svg";
import ResponsiveTop from "../components/ResponsiveTop";
import store from "../redux/store";
import postInDrop from "../Exports/comment/postIn.svg";
import scores from "../Exports/scores.svg";
import grade from "../Exports/grade.svg";
import help_outline from "../Exports/help_outline.svg";
import ViewPostInsp from "../components/Discussion/ViewPostInsp";
import axios from "axios";
import ScoreSheet from "../components/Discussion/ScoreSheet";

function ViewDiscussion() {
  const [showPostInsp, setshowPostInsp] = useState(false);
  const [sendBtn, setSendBtn] = useState(false);
  const [comment, setcomment] = useState([""]);
  const togglePostInsp = () => {
    setshowPostInsp(!showPostInsp);
  };
  const handleChange = (e) => {};
  const { code } = useParams();

  const [DiscussionCont, setDiscussionCont] = useState([""]);
  const getPresentDiscussion = async () => {
    var apiBaseUrl = `http://localhost:8080/api/auth/discussion?discussionId=${code}`;

    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";
    try {
      const res = await axios.get(apiBaseUrl);
      const data = res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log({ ...error });
    }
  };
  useEffect(() => {
    const fetchDiscussion = async () => {
      const discussion = await getPresentDiscussion();
      // dispatch(saveDisc(discussions));

      setDiscussionCont(discussion);
    };
    fetchDiscussion();
  }, []);

  console.log(DiscussionCont);
  return (
    <BodyWrapper>
      <ResponsiveTop title="Discussion" />
      <div className="viewDisCont pt-1">
        {showPostInsp && <ViewPostInsp togglePostInsp={togglePostInsp} />}
        {/* HEADING AND TITLE */}
        <div className="viewHeading ">
          <div className="viewHeadText">
            <FiArrowLeft
              onClick={() => history.push("../discussions")}
              className="viewIcon"
            />
            {/* <h3>Type title here</h3> */}
            <h3>{DiscussionCont[0].description}</h3>
          </div>
          <div className="viewButton">
            <button
              className={`border ${comment.length !== 0 && " bg-border"}
              ${comment.length !== 0 ? " text-white" : " text-btnText"}
              ${comment.length !== 0 ? " border-none" : " border-btnText"}
            `}
            >
              Charts
            </button>
            <button
              className={`border ${comment.length !== 0 && " bg-border"}
              ${comment.length !== 0 ? " text-white" : " text-btnText"}
              ${comment.length !== 0 ? " border-none" : " border-btnText"}
            `}
            >
              Filter
            </button>
          </div>
          <div className="moreInfo">
            <div className="viewImg">
              <img src={`${comment.length !== 0 ? scores : vec1}`} alt="" />
              <h3>Scores</h3>
            </div>
            <div className="viewImg">
              <img src={`${comment.length !== 0 ? grade : vec2}`} alt="" />
              <h3>Gradesheet</h3>
            </div>
            <img src={help_outline} className="helpBtn" alt="" />
          </div>
        </div>
        {/* MAIN DISCUSSION */}
        <div className="border border-red h-full flex">
          <div className=" border border-red h-full flex flex-col justify-between w-1/2">
            <ViewDisTemp
              question="In this discussion we are going to take sides on a topic."
              // name="hello world"

              // question={discussion.description}
              name={DiscussionCont[0].username}
              username={DiscussionCont[0].username}
              togglePostInsp={togglePostInsp}
            />
            {/* Comment Section */}
            <div className="allCommentCont">
              {comment.length !== 0 ? (
                <ViewCommentTemp
                  name="Elvis Collins"
                  username="COLLINS"
                  comment="Currently, Government agencies are discussing the dangers of dumping nuclear water into the ocean."
                />
              ) : (
                <h2 className="nocomment">
                  Click “Post Inspiration” for ideas on what to post
                </h2>
              )}
            </div>
            {/* COMMENT BOX */}
            <div className="commentBoxCont">
              <div className="commentBox">
                {/* <h4 className="replyTo">@ {discussion.username}</h4> */}
                <textarea
                  className="textA"
                  name=""
                  onChange={handleChange}
                  placeholder="What’s your opinion on the topic?"
                ></textarea>
                <div className="widgetCont">
                  <div className="widget">
                    <img src={textFormat} alt="" />
                    <img src={smile} alt="" />
                    <img src={attFile} alt="" />
                    <img src={insertPhoto} alt="" />
                    <img src={code} alt="" />
                    <img src={cameraAlt} alt="" />
                    <img src={assessment} alt="" />
                  </div>
                  <div className="commentBtnCont ">
                    <button className="commentBtn" onclick={setshowPostInsp}>
                      Post as
                      <img className="ml-1" src={postInDrop} alt="" />
                    </button>
                    <button className="commentBtn ">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SCORING */}
          <ScoreSheet />
        </div>
      </div>
    </BodyWrapper>
  );
}

export default ViewDiscussion;
