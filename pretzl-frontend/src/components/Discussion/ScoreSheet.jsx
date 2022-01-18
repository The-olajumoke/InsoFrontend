import React, { useState } from "react";
import "../../Styling/Discussion/scoreSheet.css";
import clear from "../../Exports/clear.svg";
import feedback from "../../Exports/scores/feedback.svg";
import scoreSheetIC from "../../Exports/scores/scoreSheet@.svg";
import responded from "../../Exports/scores/responded.svg";
import ScoreBox from "./ScoreBox";
import RubricBox from "./RubricBox";

function ScoreSheet({ toggleScore }) {
  const users = ["boy", "girl", "good", "bad"];
  const [automatic, setautomatic] = useState(true);
  return (
    <div className="scoreSheet">
      <div className="flex justify-between items-center  mb-20">
        <h2 className="scoreSheet-heading">Scores</h2>
        <img src={clear} onClick={toggleScore} alt="" />
      </div>
      {/* ALLOCATED */}
      {automatic ? (
        <>
          <div className="showScoresCont  allocated">
            <div className="showScoresText ">
              <img src={scoreSheetIC} alt="" className=" opacity-0" />
              <img src={responded} alt="" className=" opacity-0" />
              <h4 className="">Points Allocated</h4>
            </div>
            <div className="scoreSection ">
              <h5 className="scoreSectionTitle allocatedValue ">2</h5>
              <h5 className="scoreSectionTitle allocatedValue">4</h5>
              <h5 className="scoreSectionTitle allocatedValue">6</h5>
              <h5 className="scoreSectionTitle allocatedValue">12</h5>
              <div className="scoreSectionTitle  scoreIC">
                <img src={feedback} alt="" className=" opacity-0" />
              </div>
            </div>
          </div>
          {/* HEADINGS */}
          <div className="showScoresCont">
            <div className="showScoresText ">
              <img src={scoreSheetIC} alt="" className=" opacity-0" />
              <img src={responded} alt="" className=" opacity-0" />
              <h4>User</h4>
            </div>
            <div className="scoreSection ">
              <h5 className="scoreSectionTitle ">Posts</h5>
              <h5 className="scoreSectionTitle">Responses</h5>
              <h5 className="scoreSectionTitle">Upvotes</h5>
              <h5 className="scoreSectionTitle ">Total score</h5>
              <div className="scoreSectionTitle scoreIC">
                <img src={feedback} alt="" className=" opacity-0 w-5 ml-5" />
              </div>
            </div>
          </div>
          {/* DIVIDER */}
          <div className="px-5  w-77 flex justify-center my-3 mx-auto">
            <hr className="" />
          </div>
          {/* VALUES */}
          <div className="flex flex-col gap-y-4 ">
            {users.map((user) => (
              <ScoreBox user="Beth Keen" p={2} r={4} u={6} t={12} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="showScoresCont  allocated">
            <div className="showScoresText ">
              <img src={scoreSheetIC} alt="" className=" opacity-0" />
              <img src={responded} alt="" className=" opacity-0" />
              <h4 className="">Maximum score</h4>
            </div>
            <div className="scoreSection ">
              <h5 className="scoreSectionTitle allocatedValue ">100</h5>
              <h5 className="scoreSectionTitle allocatedValue opacity-0">4</h5>
              <h5 className="scoreSectionTitle allocatedValue opacity-0">6</h5>
              <h5 className="scoreSectionTitle allocatedValue opacity-0">12</h5>
              <div className="scoreSectionTitle  scoreIC">
                <img src={feedback} alt="" className=" opacity-0" />
              </div>
            </div>
          </div>
          {/* HEADINGS */}
          <div className="showScoresCont">
            <div className="showScoresText ">
              <img src={scoreSheetIC} alt="" className=" opacity-0" />
              <img src={responded} alt="" className=" opacity-0" />
              <h4>User</h4>
            </div>
            <div className="RubricSection  ">
              <h5 className="RubricInput  ">Criteria</h5>
              <h5 className="RubricTitle t-score">Total score</h5>
              <div className="RubricTitle">
                <img src={feedback} alt="" className="opacity-0 w-5 ml-5" />
              </div>
            </div>
          </div>
          {/* DIVIDER */}
          <div className="px-5   w-4/5 flex justify-center my-4 mx-auto">
            <hr className="" />
          </div>
          {/* VALUES */}
          <div className="flex flex-col gap-y-4 ">
            {users.map((user) => (
              <RubricBox />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ScoreSheet;
