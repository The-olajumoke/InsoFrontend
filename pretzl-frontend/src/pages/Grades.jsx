import React from 'react'
import { FiBriefcase } from 'react-icons/fi'
import BodyWrapper from '../components/BodyWrapper'

function Grades() {
    return (
      <BodyWrapper>
        <div className="gradesMain">
          <div className="gradesCont">
            <h2 className="profileHeading">Reports</h2>
            <div>
              <FiBriefcase />
              <h3>Grade Sheet</h3>
            </div>
            <div>
              <FiBriefcase />
              <h3>Scoring</h3>
            </div>
          </div>
        </div>
      </BodyWrapper>
    );
}

export default Grades
