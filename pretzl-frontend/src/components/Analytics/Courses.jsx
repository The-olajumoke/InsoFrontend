import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "../../Styling/Analytics/courses.css"
import ActivityChart from "../ActivityChart";

function Courses({ handleClick }) {
  return (
    <div className="w-full">
      <div className="courseCont ">
        <div className="courseHeader">
          <h2>Active Courses</h2>
          <h4>States are based on engagement per course</h4>
        </div>
        <div className="noOfCourses">
          <span> 18</span> courses
        </div>
      </div>
      <div className="actCont">
        <ActivityChart />
      </div>

      {/* Buttons */}
      <div className="allTypesCont">
        <button name="courses" className="typeBtn border-b-2 border-primary" onClick={handleClick}>
          Courses
        </button>
        <button name="discussions" className="typeBtn" onClick={handleClick}>
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

export default Courses;
