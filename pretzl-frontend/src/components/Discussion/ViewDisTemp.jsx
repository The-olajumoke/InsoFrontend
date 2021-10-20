import React from 'react'
import Avatar from "../../Exports/Avatar.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
function ViewDisTemp({name,question,username}) {
    return (
      <div className="DiscProp">
        {/* Heading */}
        <div className="top">
          <div className="avatars">
            <img src={Avatar} alt="" />
            <div>
              <div className="flex items-center">
                <h5>{name}</h5>
                <h4 className='ml-2'>@{username}</h4>
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
          <h3>
          {question}
          </h3>
        </div>
      </div>
    );
}

export default ViewDisTemp
