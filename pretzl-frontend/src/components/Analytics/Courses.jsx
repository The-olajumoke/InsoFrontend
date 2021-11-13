import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import store from "../../redux/store";
import "../../Styling/Analytics/courses.css";
import ActivityChart from "../ActivityChart";
import AnalDropdown from "./AnalDropdown";

function Courses({ count, options, handleClick })
 {
  const [dropdown, setdropdown] = useState(false);
// console.log(count);
  return (
    <div className="theMainCont">
      <div className="courseCont">
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
        <button
          name="courses"
          className="typeBtn border-b-2 border-primary"
          onClick={() => {
            setdropdown(!dropdown);
          }}
        >
          Discussion set
          <IoMdArrowDropdown />
          {dropdown && <AnalDropdown options={options} />}
        </button>
        <button name="discussions" className="typeBtn" onClick={handleClick}>
          Discussions
          <IoMdArrowDropdown />
        </button>
        <button name="threads" className="typeBtn" onClick={handleClick}>
          Threads
          <IoMdArrowDropdown />
        </button>
      </div>
    </div>
  );
}

export default Courses;
