import React, { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";

import { FiArrowLeft } from "react-icons/fi";
import BodyWrapper from "../components/BodyWrapper";
import DiscussionBox from "../components/Discussion/DiscussionBox";
import ResponsiveTop from "../components/ResponsiveTop";
import history from "../utils/history";
import EditDisModal from "../components/Discussion/EditDisModal";
function ViewDiscussionSet() {
  let dis=history.location.state;
  console.log(dis);
  dis=dis.disc
  localStorage.setItem('disc',JSON.stringify(dis))
const disc=localStorage.getItem('disc')
console.log(disc);
  const [DiscussionCont,setDiscussionCont] = useState(JSON.parse(localStorage.getItem('disc')));

  const [showModal, setshowModal] = useState(false);

  const showEditModal = () => {
    setshowModal(!showModal);
  };

  return (
    <BodyWrapper>
      <ResponsiveTop title="Discussion Title" />
      <div className="disMain ">
        {showModal && <EditDisModal showEditModal={showEditModal} discussions={DiscussionCont} />}
        <div className="disCont">
          <div className="discBtnCont">
            <div className="viewHeadText">
              <FiArrowLeft
                onClick={() => history.push("../discussions")}
                className="viewIcon"
              />

              <h3>Discussion Set 1</h3>
            </div>
            <div className="topRightSet flex">
              <div className="filterAndsort" onClick={showEditModal}>
                <MdOutlineModeEdit className="topIcon" />
                <h4>Edit discussions</h4>{" "}
              </div>
              <div className="filterAndsort">
                <BsFilterLeft className="topIcon" />
                <h4>Sort Archives by...</h4>
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
                  title={dis.description}
                  date={dis.date}
                  numberOfPeople={dis.numberOfPeople}
                  name={dis.username}
                  code={dis.discussionId}
                  setID={dis.setId} />
            ))}
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default ViewDiscussionSet;
