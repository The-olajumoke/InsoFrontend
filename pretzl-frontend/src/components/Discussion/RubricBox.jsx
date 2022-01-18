import React from "react";
import feedback from "../../Exports/scores/feedback.svg";
import scoreSheetIC from "../../Exports/scores/scoreSheet@.svg";
import responded from "../../Exports/scores/responded.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
function RubricBox(props) {

  return (
    <div className="">
      <div className="showScoresCont">
        <div className="showScoresText ">
          <img src={scoreSheetIC} alt="" className=" " />
          <img src={responded} alt="" className=" " />
          <h4>Beth Keen</h4>
        </div>
        <div className="RubricSection  ">
          <div className="RubricInput">
            <input type="text" placeholder="At least 5 comments" />
            <div className="arrowDown">
              <MdKeyboardArrowDown />
            </div>
          </div>
          <h5 className="RubricTitle RubricValue">12</h5>
          <div className="RubricTitle">
            <img src={feedback} alt="" className="  w-5 ml-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RubricBox;
