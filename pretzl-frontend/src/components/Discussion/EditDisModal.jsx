import React, { useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import {
  MdCancel,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdArrowUpward,
  MdBarChart,
} from "react-icons/md";
import { BiSmile } from "react-icons/bi";
import "../../Styling/Discussion/EditDis.css";
import textFormat from "../../Exports/comment/text_format.svg";
import attFile from "../../Exports/comment/attach_file.svg";
import assessment from "../../Exports/comment/assessment.svg";
import insertPhoto from "../../Exports/comment/insert_photo.svg";
import code from "../../Exports/comment/icomoon-free_embed2.svg";
import smile from "../../Exports/comment/sentiment_satisfied_alt.svg";
import cameraAlt from "../../Exports/comment/camera_alt.svg";
import addCircle from "../../Exports/add_circle.svg";
import clear from "../../Exports/clear.svg";
import { BsClock, BsChatLeft } from "react-icons/bs";
function EditDisModal({ discussions, showEditModal }) {
  const [allCheckedIDs, setallCheckedIDs] = useState([]);
  // STARTER PROMPT

  const [starterPrompt, setstarterPrompt] = useState(false);
  const [starterPromptMode, setstarterPromptMode] = useState(false);
  const [starterPromptValue, setstarterPromptValue] = useState("");
  // POST INSPIRATION
  const [postInsp, setPostInsp] = useState(false);
  const [postInspMode, setPostInspMode] = useState(false);
  const [posting, setPosting] = useState(true);
  const [responding, setResponding] = useState(false);
  const [synthesizing, setSynthesizing] = useState(false);

  // POST AS
  const [postAs, setpostAs] = useState(false);
  const [postAsMode, setpostAsMode] = useState(false);
  // SCORES
  const [scores, setscores] = useState(false);
  const [scoresMode, setScoresMode] = useState(false);
  const [scoresValue, setScoresValue] = useState(20);
  const [reactionsValue, setReactionsValue] = useState(20);
  const [upvoteValue, setUpvoteValue] = useState(20);
  const [totalValue, setTotalValue] = useState(60);
  // CALENDAR
  const [calendar, setCalendar] = useState(false);
  const [calendarMode, setCalendarMode] = useState(false);
  const [automatic, setautomatic] = useState(true);
  const [applyAll, setApplyAll] = useState("");

  console.log(discussions);

  //   HANDLE CHECKED
  const handleChecked = (e) => {
    //   alert(e.target.checked)
    setApplyAll(true);
  };

  const saveEdit = () => {
    const payload = {
      set_id: "m876",
      updateDiscussions: [
        {
          // discussion_id: "discussion1",
          starterPrompt: `${starterPromptValue}`,
          postInspirations: [
            {
              type: "posting",
            },
          ],
          postAs: ["lorem", "1234"],
          scores: {
            type: "score",
            actions: [
              {
                type: "Scores",
                score: { scoresValue },
                criteria: ["comments1"],
              },
              {
                type: "Reactions",
                score: { reactionsValue },
                criteria: ["comments2"],
              },
              {
                type: "Upvotes",
                score: { upvoteValue },
                criteria: ["comments3"],
              },
            ],
            totalScore: { totalValue },
          },
          startDate: "2021-12-15",
          closeDate: "2021-12-16",
        },
      ],
    };
  };

  //  ARRAY FOR KNOWING WHO IS MARKED[]
  return (
    <div className="editModal">
      <div className="EditDiscont">
        <div className="EditDisTop">
          <button>Save</button>
          <img src={clear} onClick={showEditModal} alt="" />
        </div>
        <h2 className="EditHeading">Discussions</h2>
        <div className="allCheckDisc ">
          {discussions.map((dis, index) => (
            <div className="formControl " key={index}>
              <input type="checkbox" name="disc" id={index} />
              <label htmlFor="">{dis.description}</label>
            </div>
          ))}
        </div>
        {/*  BENEATH BOX */}
        <div className="px-10">
          <hr />
        </div>
        <div className="EditDisBottom">
          <div className="EditDisTop">
            <h2 className="SettingsHeading">Settings</h2>
            <div className="applyAll">
              <label htmlFor="">Apply to all discussions</label>
              <input type="checkbox" name="" id="" onChange={handleChecked} />
            </div>
          </div>

          <div className="allSettings">
            {/* STARTER PROMPT */}
            <div className="settingsMainCont ">
              <div className="settingsTop">
                <h3 className="settingsName ">Starter prompt</h3>
                <div className="settingsControl">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="starterPrompt"
                      id="starterPrompt"
                      onChange={(e) => setstarterPromptMode(!starterPromptMode)}
                    />
                    <span className="slider round"></span>
                  </label>
                  {starterPrompt ? (
                    <MdKeyboardArrowUp
                      className="settingsIcon"
                      onClick={() => setstarterPrompt(!starterPrompt)}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      className="settingsIcon"
                      onClick={() => setstarterPrompt(!starterPrompt)}
                    />
                  )}
                </div>
              </div>
              {starterPrompt && (
                <div className="settingsMore">
                  <div
                    className={`commentBox settingsBox ${
                      starterPromptMode ? "" : "unactive"
                    }`}
                  >
                    <textarea
                      className="textA"
                      name=""
                      readOnly={!starterPromptMode}
                      placeholder="Get this discussion started"
                      onChange={(e) => setstarterPromptValue(e.target.value)}
                    ></textarea>
                    <div className="widgetCont">
                      <div className="widget settingsWidget">
                        <img src={textFormat} alt="" />
                        <img src={smile} alt="" />
                        <img src={attFile} alt="" />
                        <img src={insertPhoto} alt="" />
                        <img src={code} alt="" />
                        <img src={cameraAlt} alt="" />
                        <img src={assessment} alt="" />
                      </div>
                    </div>
                  </div>{" "}
                </div>
              )}
            </div>

            {/*POST INSPIRATION */}
            <div className="settingsMainCont">
              <div className="settingsTop">
                <h3 className="settingsName ">Post Inspiration</h3>
                <div className="settingsControl">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="reports"
                      id="postInspiration"
                      onChange={(e) => setPostInspMode(!postInspMode)}
                    />
                    <span className="slider round"></span>
                  </label>
                  {postInsp ? (
                    <MdKeyboardArrowUp
                      className="settingsIcon"
                      onClick={() => setPostInsp(!postInsp)}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      className="settingsIcon"
                      onClick={() => setPostInsp(!postInsp)}
                    />
                  )}
                </div>
              </div>
              {postInsp && (
                <div
                  className={`postInspMore ${postInspMode ? "" : "unactive"}`}
                >
                  <div className="allPostBtn">
                    <button
                      className={`postInspBtn ${posting && "bg-primary"} 
                      ${posting ? "text-white" : "text-textBody"}`}
                      onClick={() => {
                        setPosting(true);
                        setResponding(false);
                        setSynthesizing(false);
                      }}
                    >
                      Posting
                    </button>
                    <button
                      className={`postInspBtn ${responding && "bg-primary"} 
                      ${responding ? "text-white" : "text-textBody"}`}
                      onClick={() => {
                        setPosting(false);
                        setResponding(true);
                        setSynthesizing(false);
                      }}
                    >
                      Responding
                    </button>
                    <button
                      className={`postInspBtn ${synthesizing && "bg-primary"} 
                      ${synthesizing ? "text-white" : "text-textBody"}`}
                      onClick={() => {
                        setPosting(false);
                        setResponding(false);
                        setSynthesizing(true);
                      }}
                    >
                      Synthesizing
                    </button>
                  </div>
                  <input
                    type="text"
                    className="postInspInput"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                  <div className="inspAddCircle">
                    <img src={addCircle} alt="" />
                  </div>
                  <div className="addinsp">
                    <button>Add post inspiration</button>
                  </div>
                </div>
              )}
            </div>

            {/*POST AS */}
            <div className="settingsMainCont">
              <div className="settingsTop">
                <h3 className="settingsName ">Post as</h3>
                <div className="settingsControl">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="reports"
                      id="postAs"
                      onChange={(e) => setpostAsMode(!postAsMode)}
                    />
                    <span className="slider round"></span>
                  </label>
                  {postAs ? (
                    <MdKeyboardArrowUp
                      className="settingsIcon"
                      onClick={() => setpostAs(!postAs)}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      className="settingsIcon"
                      onClick={() => setpostAs(!postAs)}
                    />
                  )}
                </div>
              </div>
              {postAs && (
                <div className={`postInspMore ${postAsMode ? "" : "unactive"}`}>
                  <div className="allPostBtn allPostAsBtn">
                    <button className="postAsBtn">lorem</button>
                    <button className="postAsBtn">lorem</button>
                    <button className="postAsBtn">lorem</button>
                    {/* <div className="inspAddCircle"> */}
                    <img src={addCircle} alt="" />
                    {/* </div> */}
                  </div>
                </div>
              )}
            </div>

            {/*SCORES */}
            <div className="settingsMainCont">
              <div className="settingsTop">
                <h3 className="settingsName ">Scores</h3>
                <div className="settingsControl">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="reports"
                      id="scores"
                      onChange={(e) => setScoresMode(!scoresMode)}
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
                      onClick={() => setscores(!scores)}
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
                          Scores
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

                          <MdKeyboardArrowDown className="settingsIcon" />
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

                          <MdKeyboardArrowDown className="settingsIcon" />
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

                          <MdKeyboardArrowDown className="settingsIcon" />
                        </div>
                      </div>
                      <div className="options TotalOptions">
                        <h3 className="optionsName">
                          <MdBarChart className="optionsIcon" />
                          Total Score
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

                          <MdKeyboardArrowDown className="settingsIcon opacity-0" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="rubricTop">
                        <h3 className="rubricTopText">Criteria</h3>
                        <h3 className="rubricTopText">Score</h3>
                      </div>
                      <div className="rubricMid">
                        <textarea
                          name=""
                          id=""
                          placeholder="In 2000, the stock market"
                        ></textarea>
                        <div className="rubricScores">
                          <h2>20</h2>
                          <h2>20</h2>
                        </div>
                      </div>
                      <div className="rubricBottom">
                        <input
                          type="text"
                          className="rubricInput"
                          placeholder="At least 5 comments"
                        />
                        <div className="inspAddCircle">
                          <img src={addCircle} alt="" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/*CALENDAR */}
            <div className="settingsMainCont">
              <div className="settingsTop">
                <h3 className="settingsName ">Calendar</h3>
                <div className="settingsControl">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="reports"
                      id="calendar"
                      onChange={(e) => setCalendarMode(!calendarMode)}
                    />
                    <span className="slider round"></span>
                  </label>
                  {calendar ? (
                    <MdKeyboardArrowUp
                      className="settingsIcon"
                      onClick={() => setCalendar(!calendar)}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      className="settingsIcon"
                      onClick={() => setCalendar(!calendar)}
                    />
                  )}
                </div>
              </div>
              {calendar && (
                <div
                  className={`postInspMore ${calendarMode ? "" : "unactive"}`}
                >
                  <div className="calItem">
                    <h4 className="limit">open</h4>
                    <div className="calendarOption">
                      <div className="calendarTime">
                        <BsClock className="calIcon" />
                        8:00 <span>AM</span>
                      </div>

                      <h4 className="calendarInput">Fri 1st, January 2021</h4>
                    </div>
                  </div>
                  <div className="calItem">
                    <h4 className="limit">close</h4>
                    <div className="calendarOption">
                      <div className="calendarTime">
                        <BsClock className="calIcon" />
                        8:00 <span>AM</span>
                      </div>

                      <h4 className="calendarInput">Fri 1st, January 2021</h4>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDisModal;
