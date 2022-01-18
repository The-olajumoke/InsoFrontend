import React, { useState } from "react";
import {
  MdChatBubbleOutline,
  MdContentCopy,
  MdLock,
  MdLockOpen,
} from "react-icons/md";
import "../../Styling/Discussion/Discussion.css";
import img from "../../Exports/DisIcon.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import EditDisModal from "./EditDisModal";

function DiscussionBox(props) {
  const { title, id, code, name, numberOfPeople, date } = props;
  const [showModal, setshowModal] = useState(false);
  const [showEdit, setshowEdit] = useState(false);

  const handleEdit = () => {
    setshowModal(!showModal);
  };
   const showEditModal = () => {
setshowEdit(!showEdit)
   };
  const [DiscussionCont, setDiscussionCont] = useState([props]);
  return (
    <div className="discBox ring ring-red">
      {showEdit && (
        <EditDisModal
          showEditModal={showEditModal}
          discussions={DiscussionCont}
        />
      )}
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
        {showModal && (
          <div className="editBox">
            <button onClick={() =>{ setshowEdit(!showEdit)
            setshowModal(!showModal)
            }}>
              <FiEdit />
              Edit
            </button>
            <button>
              <FiEdit />
              Archive
            </button>
            <button>
              <FiEdit />
              Duplicate
            </button>
          </div>
        )}
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
        <Link to={{ pathname: `/discussion/${code}` }}>
          <button>Open</button>
        </Link>
      </div>
    </div>
  );
}

export default DiscussionBox;
