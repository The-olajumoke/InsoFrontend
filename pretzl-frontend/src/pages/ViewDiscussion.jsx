import React from "react";
import BodyWrapper from "../components/BodyWrapper";
import { useParams } from "react-router-dom";
import { allDiscData } from "../DummyData/discData";
import "../Styling/viewDiscussion.css";
import vec1 from "../Exports/vec1.svg";
import vec2 from "../Exports/vec2.svg";
import { FiArrowLeft } from "react-icons/fi";

import ViewDisTemp from "../components/Discussion/ViewDisTemp";
import ViewCommentTemp from "../components/Discussion/ViewCommentTemp";
import history from "../utils/history";
function ViewDiscussion() {
  const { id } = useParams();
  console.log(allDiscData);
  let discussion = allDiscData.find((disc) => id == disc.id);

  console.log(discussion);
  return (
    <BodyWrapper>
      <div className="viewDisCont mt-2">
        {/* HEADING AND TITLE */}
        <div className="viewHeading">
          <div className="viewHeadText">
            <FiArrowLeft
              onClick={() => history.push("../discussions")}
              className="viewIcon"
            />
            <h3>Type title here</h3>
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
          question={discussion.question}
          name={discussion.name}
          username={discussion.username}
        />
        {/* Comment Section */}
        <div>
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
      </div>
    </BodyWrapper>
  );
}

export default ViewDiscussion;
