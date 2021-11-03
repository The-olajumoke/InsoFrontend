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
import { Link } from "react-router-dom";

function DiscussionBox({ title, id, code, name, numberOfPeople, date }) {
  const [showEdit, setshowEdit] = useState(false);
  const [trial, setTrial] = useState(false);
  const handleEdit = () => {
    setshowEdit(!showEdit);
  };
  return (
    <div
      className="discBox ring"
     
    >
  
      <div className="boxHead">
        <div className=" box-1">
          <MdChatBubbleOutline className=" mr-1" />
          <h4>{name}</h4>
        </div>
        <div className="box-2">
          <div className="flex  ml-6">
            <img src={img} alt="" />
            <h5>{numberOfPeople}</h5>
          </div>
          <div className="flex">
            <MdLock />
            <BsThreeDotsVertical
              className="text-primary"
              onClick={handleEdit}
            />
          </div>
        </div>
      </div>

      <div className="boxDetail ">
        <h2 className="boxDetailTitle">{title}</h2>
        <h4>{date}</h4>
      </div>

      <div className="boxfooter">
        <div className="flex  items-center">
          <h4>{code}</h4>
          <MdContentCopy className="ml-2" />
        </div>
        <Link to={{ pathname: `/discussion/${id}` }}>
          <button>Open</button>
        </Link>
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
