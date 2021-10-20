import React from "react";
import { MdChatBubbleOutline } from "react-icons/md";
import avatar from "../../Exports/Avatar.svg";
import postImg from "../../Exports/notifications/postIcon.svg";
function PostNofication({ image, postFrom, topic }) {
  return (
    <div className="postCont">
      <div className=" postsubcont ">
        <div className="postIcon">
          <img src={postImg} alt="" />
        </div>
        <div className="postInfo">
          <div className="avatars">
            <img src={avatar} alt="" />
          </div>
          <div className="moreInfo">
            <h4>Recent post from </h4>
            <h5>@COLLINS</h5>
          </div>
          <h5 className="postTopic">
            Currently, Government agencies are discussing the dangers of dumping
            nuclear water into the ocean.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default PostNofication;
