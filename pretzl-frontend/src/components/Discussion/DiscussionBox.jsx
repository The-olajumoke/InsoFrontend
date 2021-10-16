import React, { useState } from "react";
import {
  MdChatBubbleOutline,
  MdContentCopy,
  MdLock,
  MdLockOpen,
} from "react-icons/md";
import "../../Styling/Discussion.css";
import img from "../../Exports/DisIcon.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
function DiscussionBox({ title, code, name, numberOfPeople, date }) {
  const [showEdit, setshowEdit] = useState(false);
  const handleEdit = () => {
    setshowEdit(!showEdit);
  };
  return (
    <div className="discBox">
      <div className="boxHead">
        <div className=" box-1">
          <MdChatBubbleOutline />
          <h4>{name}</h4>
        </div>
        <div className="box-2">
          <div className="flex items-center ml-6">
            <img src={img} alt="" />
            <h5>{numberOfPeople}</h5>
          </div>
          <div className="flex">
            <MdLock />
            <BsThreeDotsVertical onClick={handleEdit} />
          </div>
        </div>
      </div>

      <div className="boxDetail">
        <h2>{title}</h2>
        <h4>{date}</h4>
      </div>

      <div className="boxfooter">
        <h4>{code}</h4>
        <MdContentCopy />
        <button>Open</button>
      </div>
      {showEdit && (
        <div className="editBox">
          <span>
            <FiEdit />
            Edit
          </span>
          <span>
            <FiEdit />
            Archive
          </span>
          <span>
            <FiEdit />
            Duplicate
          </span>
        </div>
      )}
    </div>
  );
}

export default DiscussionBox;
