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
import { editDisc } from "../../redux/Discussion/disSlice";
import { useDispatch } from "react-redux";
import CalendarTemp from "../EditDisc/CalendarTemp";

function EditDisModal({ discussio, showEditModal }) {
  const dispatch = useDispatch();
  const [allCheckedIDs, setallCheckedIDs] = useState([]);
  const [saveState, setSaveState] = useState(false);
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
  const [allPostInsp, setAllPostInsp] = useState([
    {
      post_inspiration: "Type in a post inspiration",
    },
  ]);

  // POST IN
  const [postAs, setpostAs] = useState(false);
  const [postAsMode, setpostAsMode] = useState(false);
  const [allPostAs, setAllPostAs] = useState([
    {
      post_in: "questions",
    },
    {
      post_in: "resources",
    },
    {
      post_in: "synthesis",
    },
  ]);
  // SCORES
  const [scores, setscores] = useState(false);
  const [scoresMode, setScoresMode] = useState(false);
  const [scoresValue, setScoresValue] = useState(20);
  const [reactionsValue, setReactionsValue] = useState(20);
  const [upvoteValue, setUpvoteValue] = useState(20);
  const [totalValue, setTotalValue] = useState(60);
  const [allrubric, setAllRubric] = useState([
    {
      criteria: "must be white",
    },
  ]);
  const [rubMaxScore, setRubMaxScore] = useState(100);
  let midscore = rubMaxScore / allrubric.length;
  midscore = midscore.toFixed(0);

  // CALENDAR
  const [calendar, setCalendar] = useState(false);
  const [calendarMode, setCalendarMode] = useState(false);
  const [automatic, setautomatic] = useState(true);
  const [applyAll, setApplyAll] = useState(false);
  const [showCalDate, setShowCalDate] = useState(false);

  const [date, setDate] = useState([
    new Date(2021, 6, 1),
    new Date(2021, 6, 10),
  ]);

  //   HANDLE CHECKED
  const handleChecked = (e) => {
    alert(e.target.checked);
    setApplyAll(!applyAll);
    if (e.target.checked) {
      let newar = discussions.filter((dis) => dis.discussionId);
      newar = newar.discussionId;
      console.log(newar);
    } else {
      setallCheckedIDs([""]);
    }

    // dis
  };
  //HANDLE SAVE EDITS
  const saveEdit = () => {
    console.log(upvoteValue);
    const payload = {
      set_id: `${discussions[0].setId}`,
      updateDiscussions: [
        allCheckedIDs.map((ids) => ({
          discussion_id: `${ids}`,
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
                score: scoresValue,
                criteria: ["comments1"],
              },
              {
                type: "Reactions",
                score: reactionsValue,
                criteria: ["comments2"],
              },
              {
                type: "Upvotes",
                score: upvoteValue,
                criteria: ["comments3"],
              },
            ],
            totalScore: totalValue,
          },
          startDate: "2021-12-15",
          closeDate: "2021-12-16",
        })),
      ],
    };
    //hhhjxjjxn
    console.log(JSON.stringify(payload, undefined, 2));

    // dispatch(editDisc(payload));
    setApplyAll(false);
    showEditModal();
  };
  //HANDLE ChECkBOX
  const checkBox = (e) => {
    console.log(e.target.id);
    setallCheckedIDs([...allCheckedIDs, e.target.id]);
    setSaveState(true);
  };
  console.log(allCheckedIDs);
  let discussions = ["heelo", "hi"];
  return (
    <div className="editModal">
      <div className="EditDiscont">
        <div className="EditDisTop">
          <button
            className={`saveBtn ${saveState ? "bg-primary" : "bg-saveBtn"} 
                ${saveState ? "text-white" : "text-desc"}
            `}
            onClick={saveEdit}
          >
            Save
          </button>
          <img src={clear} onClick={showEditModal} alt="" />
        </div>
        <h2 className="EditHeading">Discussions</h2>
        <div className="allCheckDisc " id={discussions[0].setId}>
          {discussions.map((dis, index) => (
            <div className="formControl " key={index}>
              {applyAll ? (
                <input
                  type="checkbox"
                  name="disc"
                  checked
                  id={dis.discussionId}
                  onChange={checkBox}
                />
              ) : (
                <input
                  type="checkbox"
                  name="disc"
                  id={dis.discussionId}
                  onChange={checkBox}
                />
              )}
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
                      onChange={(e) => {
                        setstarterPromptMode(!starterPromptMode);
                        setSaveState(true);
                      }}
                    />
                    <span className="slider round"></span>
                  </label>
                  {starterPrompt ? (
                    <MdKeyboardArrowUp
                      className="settingsIcon"
                      onClick={() => {
                        setstarterPrompt(!starterPrompt);
                      }}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      className="settingsIcon"
                      onClick={() => {
                        setstarterPrompt(true);
                        setPostInsp(false);
                        setpostAs(false);
                        setscores(false);
                        setCalendar(false);
                      }}
                    />
                  )}
                </div>
              </div>
              {starterPrompt && (
                <div className="settingsMore">
                  <div
                    className={`commentBox  settingsBox ${
                      starterPromptMode ? "" : "unactive"
                    }`}
                  >
                    <textarea
                      className="textA"
                      name=""
                      readOnly={!starterPromptMode}
                      // placeholder="Get this discussion started"
                      onChange={(e) => setstarterPromptValue(e.target.value)}
                    >
                      {`1. In this discussion we are going to be exploring.
                     2.If you are responding directly to my initial post, you can select a specific channel to post in by selecting the appropriate tag from the "Post in" dropdown menu.
                    3. For all posts and responses, be sure to #hashtag any keywords or themes.
                    4. For some ideas on what sorts of things you should post, click Posting Inspiration and explore the prompts for posting, responding and synthesizing.

`}
                    </textarea>
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
                      onChange={(e) => {
                        setPostInspMode(!postInspMode);
                        setSaveState(true);
                      }}
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
                      onClick={() => {
                        setstarterPrompt(false);
                        setPostInsp(true);
                        setpostAs(false);
                        setscores(false);
                        setCalendar(false);
                      }}
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
                  {allPostInsp.map((ins, index) => (
                    <input
                      key={index}
                      id={index}
                      type="text"
                      onChange={(e) => {
                        let newInsp = [...allPostInsp];
                        newInsp[e.target.id].post_inspiration = e.target.value;
                        setAllPostInsp(newInsp);
                        // console.log(allPostInsp);
                      }}
                      className="postInspInput mb-2 "
                      placeholder="Type in post inspirations..."
                    />
                  ))}
                  <div className="inspAddCircle">
                    <img
                      src={addCircle}
                      alt=""
                      onClick={() => {
                        const data = {
                          post_inspiration: "Type in a post inspiration",
                        };
                        setAllPostInsp([...allPostInsp, data]);
                      }}
                    />
                  </div>
                  <div className="addinsp">
                    <button>Add post inspiration</button>
                  </div>
                </div>
              )}
            </div>

            {/*POST IN */}
            <div className="settingsMainCont">
              <div className="settingsTop">
                <h3 className="settingsName ">Post in</h3>
                <div className="settingsControl">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="reports"
                      id="postAs"
                      onChange={(e) => {
                        setpostAsMode(!postAsMode);
                        setSaveState(true);
                      }}
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
                      onClick={() => {
                        setstarterPrompt(false);
                        setPostInsp(false);
                        setpostAs(true);
                        setscores(false);
                        setCalendar(false);
                      }}
                    />
                  )}
                </div>
              </div>
              {postAs && (
                <div className={`postInspMore ${postAsMode ? "" : "unactive"}`}>
                  <div className="allPostBtn allPostAsBtn">
                    {allPostAs.map((pos, index) => (
                      <input
                        id={index}
                        type="text"
                        className="postAsBtn"
                        placeholder="#channel"
                        onChange={(e) => {
                          let newpostAs = [...allPostAs];
                          newpostAs[
                            e.target.id
                          ].post_in = ` # ${e.target.value}`;
                          setAllPostAs(newpostAs);
                          // console.log(allPostInsp);
                        }}
                      />
                    ))}
                    <img
                      src={addCircle}
                      alt=""
                      onClick={() => {
                        const data = { post_in: "" };
                        setAllPostAs([...allPostAs, data]);
                      }}
                    />
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
                      onChange={(e) => {
                        setScoresMode(!scoresMode);
                        setSaveState(true);
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
                      <div className="rubricMid mb-3">
                        <h3 className="">Maximum Score</h3>
                        <div className="rubricScores">
                          <h2 className="text-primary">{rubMaxScore}</h2>
                        </div>
                      </div>
                      {allrubric.map((rub, index) => (
                        <div className="rubricMid mb-3">
                          <input
                            type="text"
                            className="rubricInput"
                            placeholder="At least 5 comments"
                            onChange={(e) => {
                              let newrub = [...allrubric];
                              newrub[e.target.id].criteria = e.target.value;
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
                              const data = { criteria: "" };
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
                      onChange={(e) => {
                        setCalendarMode(!calendarMode);
                        setSaveState(true);
                      }}
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
                      onClick={() => {
                        setstarterPrompt(false);
                        setPostInsp(false);
                        setpostAs(false);
                        setscores(false);
                        setCalendar(true);
                      }}
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
                      <button
                        className="calendarInput"
                        onClick={() => setShowCalDate(true)}
                      >
                        {date[0].toLocaleString("en-US", {
                          weekday: "short",
                          day: "numeric",
                          year: "numeric",
                          month: "long",
                        })}
                      </button>
                    </div>
                  </div>

                  <div className="calItem">
                    <h4 className="limit">close</h4>
                    <div className="calendarOption">
                      <div className="calendarTime">
                        <BsClock className="calIcon" />
                        11:59 <span>PM</span>
                      </div>
                      <button
                        className="calendarInput"
                        onClick={() => setShowCalDate(true)}
                      >
                        {date[1].toLocaleString("en-US", {
                          weekday: "short",
                          day: "numeric",
                          year: "numeric",
                          month: "long",
                        })}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {showCalDate && (
          <CalendarTemp
            date={date}
            setDate={setDate}
            setShowCalDate={setShowCalDate}
          />
        )}
      </div>
    </div>
  );
}

export default EditDisModal;
//  <CalendarTemp
//           date={date}
//           setDate={setDate}
//           setShowCalDate={setShowCalDate}
//         />
