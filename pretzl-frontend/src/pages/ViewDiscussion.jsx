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
import ViewPostInsp from "../components/Discussion/ViewPostInsp";
import axios from "axios";

function ViewDiscussion() {
  const [showPostInsp, setshowPostInsp] = useState(false);
  const { code } = useParams();
  // console.log(code);
  // const currentStore = store.getState();
  // const AllDisc = currentStore.disc.discussions;
  // console.log(AllDisc);
  // let discussion = AllDisc.find((disc) => code == disc.discussionId);
  // console.log(discussion);

  // Get Discussion details by discussionId:
  //  http://localhost:8080/api/auth/discussion?discussionId=a3bdc000-79a8-492c-8727-274d90c5b075
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
        {showPostInsp && <ViewPostInsp />}
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
            <button>Charts</button>
            <button>Filter</button>
          </div>
          <div className="viewImg">
            <img src={vec1} alt="" />
            <img src={vec2} alt="" />
          </div>
        </div>
        {/* MAIN DISCUSSION */}
        <ViewDisTemp
          question="In this discussion we are going to take sides on a topic."
          // name="hello world"

          // question={discussion.description}
          name={DiscussionCont[0].username}
          username={DiscussionCont[0].username}
        />
        {/* Comment Section */}
        <div className="allCommentCont">
          <ViewCommentTemp
            name="Elvis Collins"
            username="COLLINS"
            comment="Currently, Government agencies are discussing the dangers of dumping nuclear water into the ocean."
          />
          <ViewCommentTemp
            name="Elvis Collins"
            username="COLLINS"
            comment="Currently, Government agencies are discussing the dangers of dumping nuclear water into the ocean."
          />
          <ViewCommentTemp
            name="Elvis Collins"
            username="COLLINS"
            comment="Currently, Government agencies are discussing the dangers of dumping nuclear water into the ocean."
          />
          <ViewCommentTemp
            name="Beth Keen"
            username="KEEN"
            comment="I’m more concerned about the opinions of environmentalists."
          />
        </div>
        {/* COMMENT BOX */}
        <div className="commentBoxCont">
          <div className="commentBox">
            {/* <h4 className="replyTo">@ {discussion.username}</h4> */}
            <textarea
              className="textA"
              name=""
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
                <button className="commentBtn">
                  Post as
                  <img className="ml-1" src={postInDrop} alt="" />
                </button>
                <button className="commentBtn">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default ViewDiscussion;
