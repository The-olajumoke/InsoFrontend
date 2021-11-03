import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import AnalDropdown from "./AnalDropdown";

import ActivityChart from "../ActivityChart";
function Threads({ handleClick, options }) {
  const [dropdown, setdropdown] = useState(false);
  return (
    <div className="">
      <div className="courseCont">
        <div className="courseHeader">
          <h2>Active Threads</h2>
          <h4>States are based on engagement per Threads</h4>
        </div>
        <div className="noOfCourses">
          <span> 18</span> Threads
        </div>
      </div>
      <div className="actCont">
        <ActivityChart />
      </div>

      {/* Buttons */}
      <div className="allTypesCont">
        <button name="courses" className="typeBtn " onClick={handleClick}>
          Discussion set
          <IoMdArrowDropdown />
        </button>
        <button name="discussions" className="typeBtn" onClick={handleClick}>
          Discussions
          <IoMdArrowDropdown />
        </button>
        <button
          name="threads"
          className="typeBtn border-b-2 border-primary"
          onClick={() => setdropdown(!dropdown)}
        >
          Threads
          <IoMdArrowDropdown />
          {dropdown ? <AnalDropdown options={options} /> : null}
        </button>
      </div>
    </div>
  );
}

export default Threads;
