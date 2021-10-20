import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import BodyWrapper from "../components/BodyWrapper";
import DiscussionBox from "../components/Discussion/DiscussionBox";
import ResponsiveTop from "../components/ResponsiveTop";
import { allsetData } from "../DummyData/discData";
import history from "../utils/history";
function ViewDiscussionSet() {
  const DiscussionCont = allsetData;
  return (
    <BodyWrapper>
      <ResponsiveTop title="Discussion Title" />
      <div className="disMain ">
        <div className="disCont ">
          <div className="discBtnCont ">
            <div className="viewHeadText">
              <FiArrowLeft
                onClick={() => history.push("../discussions")}
                className="viewIcon"
              />

              <h3>Discussion Set 1</h3>
            </div>
            <div className="flex">
              <div className="filterAndsort">
                <BsFilterLeft className="topIcon" />
                Sort Archives by...
              </div>
            </div>
          </div>

          <div className="allDisCont">
            {/* DISCUSSION SET */}
            {/* DISCUSSION */}
            {DiscussionCont.map((dis, index) => (
              <DiscussionBox
                key={index}
                id={index}
                title={dis.title}
                date={dis.date}
                numberOfPeople={dis.numberOfPeople}
                name={dis.name}
                code={dis.code}
              />
            ))}
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default ViewDiscussionSet;
