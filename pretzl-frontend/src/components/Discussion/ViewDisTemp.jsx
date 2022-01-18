import React from "react";
import Avatar from "../../Exports/Avatar.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdChatBubbleOutline } from "react-icons/md";
function ViewDisTemp({ name, question, username, togglePostInsp }) {
  return (
    <div className="DiscProp">
      {/* Heading */}
      <div className="top">
        <div className="avatars">
          <img src={Avatar} alt="" />
          <div>
            <div className="userDet">
              <h5 className="mainName">{name}</h5>
              <h4 className=" userName">@{username}</h4>
            </div>
            <div className="time">posted 3 mins ago</div>
          </div>
        </div>
        <div className="topRight">
          <button>#Open discussion</button>
          <BsThreeDotsVertical className="topRightIcon" />
        </div>
      </div>
      {/* Content */}
      <div className="viewMainText">
        <h3 className="w-5/6">{question}</h3>
      </div>
      <button className="DiscPostInspBtn" onClick={togglePostInsp}>
        <MdChatBubbleOutline />
        Post Inspirations
      </button>
    </div>
  );
}

export default ViewDisTemp;
