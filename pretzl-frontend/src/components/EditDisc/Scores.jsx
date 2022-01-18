import React from "react";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdArrowUpward,
  MdBarChart,
} from "react-icons/md";
import { BiSmile } from "react-icons/bi";

import { BsChatLeft } from "react-icons/bs";
function Scores(props) {
  const {
    setSaveState,
    setstarterPrompt,
    setPostInsp,
    setpostAs,
    setscores,
    setCalendar,
    setScoresMode,
    scoresMode,
    scores,
    automatic,
    setautomatic,
    scoresValue,
    reactionsValue,
    setReactionsValue,
    setUpvoteValue,
    totalValue,
    setTotalValue,
    rubMaxScore,
    upvoteValue,
    midscore,
    allrubric,
    setAllRubric,
    setScoresValue,
    addCircle,
  } = props;
  return (
    <div>
      <div className="settingsMainCont">
        <div className="settingsTop">
          <h3 className="settingsName ">Scores</h3>
          <div className="settingsControl">
            <label className="switch">
              <input
                type="checkbox"
                name="reports"
                id="scores"
                onChange={(e) => {
                  setScoresMode(!scoresMode);
                  setSaveState(true);
                  setscores(!scores);
                   setstarterPrompt(false);
                   setPostInsp(false);
                   setpostAs(false);
                   setCalendar(false);
                }}
              />
              <span className="slider round"></span>
            </label>
            {scores ? (
              <MdKeyboardArrowUp
                className="settingsIcon"
                onClick={() => setscores(!scores)}
              />
            ) : (
              <MdKeyboardArrowDown
                className="settingsIcon"
                onClick={() => {
                  setstarterPrompt(false);
                  setPostInsp(false);
                  setpostAs(false);
                  setscores(true);
                  setCalendar(false);
                }}
              />
            )}
          </div>
        </div>
        {scores && (
          <div className={`postInspMore ${scoresMode ? "" : "unactive"}`}>
            <div className="allPostBtn">
              <button
                // style={{`${automatic?}`}}

                className={`scoresBtn ${
                  automatic ? "bg-primary" : "bg-scoresBtn"
                } 
                      ${automatic ? "text-white" : "   text-textBody"}
                      `}
                onClick={() => setautomatic(true)}
              >
                Automatic
              </button>
              <button
                className={`scoresBtn ${
                  automatic ? "bg-scoresBtn" : "   bg-primary"
                } 
                      ${automatic ? "text-textBody" : "text-white"}
                      `}
                onClick={() => setautomatic(false)}
              >
                Rubric
              </button>
            </div>
            {/* Automatic & Rubric */}
            {automatic ? (
              <div className="autoOptions">
                <div className="options ">
                  <h3 className="optionsName">
                    <BsChatLeft className="optionsIcon" />
                    Posts
                  </h3>
                  <div className="settingsControl">
                    <input
                      className="optionScore"
                      type="number"
                      name=""
                      id=""
                      placeholder={scoresValue}
                      onChange={(e) => setScoresValue(e.target.value)}
                    />
                  </div>
                </div>
                <div className="options">
                  <h3 className="optionsName">
                    <BiSmile className="optionsIcon" />
                    Reactions
                  </h3>
                  <div className="settingsControl">
                    <input
                      className="optionScore"
                      type="number"
                      name=""
                      id=""
                      placeholder={reactionsValue}
                      onChange={(e) => setReactionsValue(e.target.value)}
                    />
                  </div>
                </div>
                <div className="options">
                  <h3 className="optionsName">
                    <MdArrowUpward className="optionsIcon" />
                    Upvotes
                  </h3>
                  <div className="settingsControl">
                    <input
                      className="optionScore"
                      type="number"
                      name=""
                      id=""
                      placeholder={upvoteValue}
                      onChange={(e) => setUpvoteValue(e.target.value)}
                    />
                  </div>
                </div>
                <div className="options TotalOptions">
                  <h3 className="optionsName">
                    <MdBarChart className="optionsIcon" />
                    Maximum Score
                  </h3>
                  <div className="settingsControl">
                    <input
                      className="optionScore"
                      type="number"
                      name=""
                      id=""
                      placeholder={totalValue}
                      onChange={(e) => setTotalValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="rubricTop">
                  <h3 className="rubricTopText">Criteria</h3>
                  <h3 className="rubricTopText">Score</h3>
                </div>
                <div className="rubricMid mb-3">
                  <h3 className="">Maximum Score</h3>
                  <div className="rubricScores">
                    <h2 className="text-primary">{rubMaxScore}</h2>
                  </div>
                </div>
                {allrubric.map((rub, index) => (
                  <div className="rubricMid mb-3">
                    <input
                      id={index}
                      type="text"
                      className="rubricInput"
                      placeholder="At least 5 comments"
                      onChange={(e) => {
                        let newrub = [...allrubric];
                        newrub[e.target.id] = e.target.value;
                        setAllRubric(newrub);
                        // console.log(allPostInsp);
                      }}
                    />
                    <div className="rubricScores">
                      <h2>{midscore}</h2>
                    </div>
                  </div>
                ))}

                <div className="rubricBottom">
                  <div className="inspAddCircle">
                    <img
                      src={addCircle}
                      alt=""
                      onClick={() => {
                        const data = "";
                        setAllRubric([...allrubric, data]);
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Scores;
