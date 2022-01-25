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
import dateFormat from "dateformat";
import { IoCopy } from "react-icons/io5";
// import { Snackbar } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

function DiscussionBox(props) {
  let { title, id, code, name, numberOfPeople, date } = props;
  date = dateFormat(date, "mmm dS");
  const [showModal, setshowModal] = useState(false);
  const [showEdit, setshowEdit] = useState(false);

  const handleEdit = () => {
    setshowModal(!showModal);
  };
  const showEditModal = () => {
    setshowEdit(!showEdit);
  };
  const [DiscussionCont, setDiscussionCont] = useState([props]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="discBox">
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
          <div className="flex items-center  ml-6">
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
            <button
              onClick={() => {
                setshowEdit(!showEdit);
                setshowModal(!showModal);
              }}
            >
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
        <h4 className="">{date}</h4>
      </div>

      <div className="boxfooter">
        <div className="flex  items-center">
          <h4>{code}</h4>
          <MdContentCopy
            className="ml-2"
            onClick={() => {
              setOpen(true);
              navigator.clipboard.writeText(code);
            }}
          />
        </div>
        <Link to={{ pathname: `/discussion/${code}`}}>
          <button>Open</button>
        </Link>
      </div>
      <Snackbar
        className="bg-primary"
        open={open}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
        message={`copied ${code} to clipboard`}
        // action={action}
      />
    </div>
  );
}

export default DiscussionBox;
