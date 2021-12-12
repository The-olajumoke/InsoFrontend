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
  const [starterPrompt, setstarterPrompt] = useState(false);
  const [postInsp, setPostInsp] = useState(false);
  const [postAs, setpostAs] = useState(false);
  const [scores, setscores] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [automatic, setautomatic] = useState(true);
  const [applyAll,setApplyAll] = useState('');

  console.log(discussions);

  //   HANDLE CHECKED
  const handleChecked = (e) => {
    //   alert(e.target.checked)
    setApplyAll(true)
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
              <label htmlFor="">{dis.title}</label>
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
                    <input type="checkbox" name="reports" id="" />
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
                  <div className="commentBox settingsBox">
                    <textarea
                      className="textA"
                      name=""
                      placeholder="Get this discussion started"
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
                    <input type="checkbox" name="reports" id="" />
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
                <div className="postInspMore">
                  <div className="allPostBtn">
                    <button className="postInspBtn">Questions</button>
                    <button className="postInspBtn">Resources</button>
                    <button className="postInspBtn">Synthesis</button>
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
                    <input type="checkbox" name="reports" id="" />
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
                <div className="postInspMore">
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
                    <input type="checkbox" name="reports" id="" />
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
                <div className="postInspMore">
                  <div className="allPostBtn">
                    <button
                      // style={{`${automatic?}`}}

                      className="scoresBtn"
                      onClick={() => setautomatic(true)}
                    >
                      Automatic
                    </button>
                    <button
                      className="scoresBtn"
                      onClick={() => setautomatic(false)}
                    >
                      Rubric
                    </button>
                  </div>
                  {/* Automatic & Rubric */}
                  {automatic ? (
                    <div className="autoOptions">
                      <div className="options">
                        <h3 className="optionsName">
                          <BsChatLeft className="optionsIcon" />
                          Scores
                        </h3>
                        <div className="settingsControl">
                          <h4 className="optionScore">20</h4>

                          <MdKeyboardArrowDown className="settingsIcon" />
                        </div>
                      </div>
                      <div className="options">
                        <h3 className="optionsName">
                          <BiSmile className="optionsIcon" />
                          Reactions
                        </h3>
                        <div className="settingsControl">
                          <h4 className="optionScore">20</h4>

                          <MdKeyboardArrowDown className="settingsIcon" />
                        </div>
                      </div>
                      <div className="options">
                        <h3 className="optionsName">
                          <MdArrowUpward className="optionsIcon" />
                          Upvotes
                        </h3>
                        <div className="settingsControl">
                          <h4 className="optionScore">20</h4>

                          <MdKeyboardArrowDown className="settingsIcon" />
                        </div>
                      </div>
                      <div className="options TotalOptions">
                        <h3 className="optionsName">
                          <MdBarChart className="optionsIcon" />
                          Total Score
                        </h3>
                        <div className="settingsControl">
                          <h4 className="optionScore">60</h4>

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
                    <input type="checkbox" name="reports" id="" />
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
                <div className="postInspMore">
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











