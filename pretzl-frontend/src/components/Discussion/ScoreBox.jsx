import React, { useState } from "react";
import feedback from "../../Exports/scores/feedback.svg";
import scoreSheetIC from "../../Exports/scores/scoreSheet@.svg";
import responded from "../../Exports/scores/responded.svg";
function ScoreBox(props) {
  const { user, p, r, u, t } = props;
  const [feedbackBox, setfeedbackBox] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

  return (
    <div className="">
      <div className="showScoresCont ">
        <div className="showScoresText ">
          <img src={scoreSheetIC} alt="" />
          <img src={responded} alt="" />
          <h4 className="showScoresValue">{user}</h4>
        </div>
        <div className="scoreSection ">
          <h5 className="scoreSectionTitle scoreSectionValue ">{p}</h5>
          <h5 className="scoreSectionTitle scoreSectionValue">{r}</h5>
          <h5 className="scoreSectionTitle scoreSectionValue"> {u} </h5>
          <h5 className="scoreSectionTitle scoreSectionValue t-score">{t}</h5>
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
          <div className=" border scoreTextArea flex flex-col items-end">
            <textarea
              className=""
              placeholder="Give your feedback"
            ></textarea>
            <button
              className={`feedbackBtn ${
                btnActive ? "bg-primary" : " bg-saveBtn"
              }`}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScoreBox;
