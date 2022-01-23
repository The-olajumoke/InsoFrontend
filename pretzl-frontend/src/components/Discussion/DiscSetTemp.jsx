import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiArrowRight, FiEdit } from "react-icons/fi";
import { MdChatBubbleOutline, MdContentCopy, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../Styling/Discussion/Discussion.css";
import imgIcon from "../../Exports/discSet.svg";
import history from "../../utils/history";
import img from "../../Exports/DisIcon.svg";
import dateFormat from "dateformat";
function DiscSetTemp({
  title,
  id,
  code,
  name,
  numberOfPeople,
  date,
  discussions,
}) {
    const [showEdit, setshowEdit] = useState(false);
  const discId = discussions[0].setId;
  date = dateFormat(date, "mmm dS");
  return (
    <div className="discBox">
      <div className="boxHead">
        <div className=" box-1">
          <img src={imgIcon} alt="" className="mr-1" />
          <h4>{name}</h4>
        </div>
        <div className="box-2">
          <div className="flex items-center ml-6">
            <img src={img} alt="" />
            <h5>4</h5>
          </div>
          <div className="flex">
            <MdLock />
            <BsThreeDotsVertical className="text-primary" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1  pt-4">
        <div className="boxDetail">
          <h2 className="boxDetailTitleSet">{title}</h2>
          <h4>{date}</h4>
        </div>

        <div className="boxfooter">
          <h3 className="disSetNumber">
            Discussions
            <span className="text-primary mx-2">{`(${discussions.length})`}</span>
          </h3>

          {/* <Link to={`discussion-set/${discId}`}> */}
          <Link
            to={{
              pathname: `discussion-set/${discId}`,
              state: { disc: discussions },
            }}
          >
            <FiArrowRight className="text-primary w-6 h-6" />
          </Link>
        </div>
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

export default DiscSetTemp;
