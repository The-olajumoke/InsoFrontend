import React from "react";
import "../../Styling/Discussion/scoreSheet.css";
import clear from "../../Exports/clear.svg";
import feedback from "../../Exports/scores/feedback.svg";
import scoreSheetIC from "../../Exports/scores/scoreSheet@.svg";
import responded from "../../Exports/scores/responded.svg";
import { useState } from "react";

function ScoreSheet() {
  const users = ["boy", "girl", "good", "bad"];
  const [feedbackBox, setfeedbackBox] = useState(false)
  return (
    <div className="scoreSheet">
      <div className="border flex justify-between items-center  mb-20">
        <h2 className="scoreSheet-heading">Scores</h2>
        <img src={clear} alt="" />
      </div>
      {/* ALLOCATED */}
      <div className="showScoresCont border allocated">
        <div className="showScoresText border">
          <img src={scoreSheetIC} alt="" className=" opacity-0" />
          <img src={responded} alt="" className=" opacity-0" />
          <h4 className="">Points Allocated</h4>
        </div>
        <div className="scoreSection border border-red">
          <h5 className="scoreSectionTitle allocatedValue ">2</h5>
          <h5 className="scoreSectionTitle allocatedValue">4</h5>
          <h5 className="scoreSectionTitle allocatedValue">6</h5>
          <h5 className="scoreSectionTitle allocatedValue">12</h5>
          <div className="scoreSectionTitle  scoreIC">
            <img src={feedback} alt="" className="border w-5 ml-5" />
          </div>
        </div>
      </div>
      {/* HEADINGS */}
      <div className="showScoresCont border">
        <div className="showScoresText border">
          <img src={scoreSheetIC} alt="" className=" opacity-0" />
          <img src={responded} alt="" className=" opacity-0" />
          <h4>User</h4>
        </div>
        <div className="scoreSection border border-red">
          <h5 className="scoreSectionTitle ">Posts</h5>
          <h5 className="scoreSectionTitle">Responses</h5>
          <h5 className="scoreSectionTitle">Upvotes</h5>
          <h5 className="scoreSectionTitle">Total score</h5>
          <div className="scoreSectionTitle scoreIC">
            <img src={feedback} alt="" className="border w-5 ml-5" />
          </div>
        </div>
      </div>
      <div className="px-5 w-[77%]  flex justify-center my-2 mx-auto">
        <hr className="" />
      </div>
      {/* VALUES */}
      <div className="border-4 border-primary flex flex-col gap-y-4">
        {users.map((user) => (
          <div className="border ">
            <div className="showScoresCont ">
              <div className="showScoresText ">
                <img src={scoreSheetIC} alt="" />
                <img src={responded} alt="" />
                <h4 className="showScoresValue">Emmy Rose</h4>
              </div>
              <div className="scoreSection border">
                <h5 className="scoreSectionTitle scoreSectionValue ">2</h5>
                <h5 className="scoreSectionTitle scoreSectionValue">4</h5>
                <h5 className="scoreSectionTitle scoreSectionValue">6</h5>
                <h5 className="scoreSectionTitle scoreSectionValue">12</h5>
                <div className="scoreSectionTitle  scoreIC">
                  <img
                    src={feedback}
                    alt=""
                    onClick={() => setfeedbackBox(!feedbackBox)}
                    className=" w-5 ml-5"
                  />
                </div>
              </div>
            </div>
            {feedbackBox && (
              <div className="flex  justify-end">
                <textarea
                  className="border scoreTextArea"
                  placeholder="Give your feedback"
                ></textarea>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreSheet;
