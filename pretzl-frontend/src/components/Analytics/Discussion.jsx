import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

import ActivityChart from "../ActivityChart";
function Discussion({handleClick}) {
    return (
      <div className="">
        <div className="courseCont">
          <div className="courseHeader">
            <h2>Active Discussion</h2>
            <h4>States are based on engagement per discussion</h4>
          </div>
          <div className="noOfCourses">
            <span> 18</span> discussions
          </div>
        </div>
        <div className="actCont">
          <ActivityChart />
        </div>

        {/* Buttons */}
        <div className="allTypesCont">
          <button name="courses" className="typeBtn " onClick={handleClick}>
            Courses
          </button>
          <button
            name="discussions"
            className="typeBtn border-b-2 border-primary"
            onClick={handleClick}
          >
            Discussions
            <IoMdArrowDropdown />
          </button>
          <button name="threads" className="typeBtn" onClick={handleClick}>
            Threads
          </button>
        </div>
      </div>
    );
}

export default Discussion
