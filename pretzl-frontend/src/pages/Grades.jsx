import React from "react";
import { FiBriefcase } from "react-icons/fi";
import BodyWrapper from "../components/BodyWrapper";
import "../Styling/Grades.css";
import ResponsiveTop from "../components/ResponsiveTop";
function Grades() {
  return (
    <BodyWrapper>
      <ResponsiveTop title="Reports" />
      <div className="gradesMain">
        <div className="gradesCont">
          <h2 className="profileHeading">Reports</h2>
          <button className="gradeText">
            <FiBriefcase className="gradeIcon" />
            <h3>Grade Sheet</h3>
          </button>
          <button className="gradeText">
            <FiBriefcase className="gradeIcon" />
            <h3>Scoring</h3>
          </button>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default Grades;
