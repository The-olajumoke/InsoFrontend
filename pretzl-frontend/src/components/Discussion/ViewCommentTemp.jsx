import React from "react";
import { FiArrowUp, FiHeart, FiMessageSquare } from "react-icons/fi";
import Avatar from "../../Exports/avatarEmpty.svg";
import { BsFillHeartFill, BsThreeDotsVertical } from "react-icons/bs";

function ViewCommentTemp({ name, username, comment }) {
  return (
    <div className="commentProp">
      {/* Heading */}
      <div className="top">
        <div className="avatars">
          <img src={Avatar} alt="" />
          <div>
            <div className="userDet">
              <h5 className="mainName">{name}</h5>
              <h4 className="userName">@{username}</h4>
            </div>
            <div className="time">posted 3 mins ago</div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="viewMainText">
        <h3>{comment}</h3>
      </div>
      {/* ICONS FOR COMMENT */}
      <div className="flex commentIconsCont">
        <div className="">
          <FiArrowUp className="commentIcons text-desc" />
          <h2>2</h2>
        </div>
        <div className="">
          <FiMessageSquare className="commentIcons text-desc" />
          <h2>2</h2>
        </div>
        <div className="">
          {/* <FiHeart /> */}
          <BsFillHeartFill className="commentIcons  text-favourite" />
          <h2>2</h2>
        </div>
      </div>
    </div>
  );
}

export default ViewCommentTemp;
