import React, { useState } from "react";
import "../../Styling/Discussion/EditDis.css";
import addCircle from "../../Exports/add_circle.svg";
import clear from "../../Exports/clear.svg";
import { editDisc } from "../../redux/Discussion/disSlice";
import { useDispatch } from "react-redux";
import CalendarTemp from "../EditDisc/CalendarTemp";
import PostInsp from "../EditDisc/PostInsp";
import StarterPrompt from "../EditDisc/StarterPrompt";
import PostAs from "../EditDisc/PostAs";
import Scores from "../EditDisc/Scores";
import Calendar from "../EditDisc/Calendar";

function EditDisModal({ discussio, showEditModal }) {
  const dispatch = useDispatch();
  const [allCheckedIDs, setallCheckedIDs] = useState([]);
  const [saveState, setSaveState] = useState(false);
  // STARTER PROMPT

  const [starterPrompt, setstarterPrompt] = useState(false);
  const [starterPromptMode, setstarterPromptMode] = useState(false);
  const [starterPromptValue, setstarterPromptValue] = useState("");
  // POST INSPIRATION
  const [postInsp, setPostInsp] = useState(true);
  const [postInspMode, setPostInspMode] = useState(false);
  const [posting, setPosting] = useState(true);
  const [responding, setResponding] = useState(false);
  const [synthesizing, setSynthesizing] = useState(false);
  const [allPostInsp, setAllPostInsp] = useState([
    {
      post_inspiration: "Type in a post inspiration",
    },
    {
      post_inspiration: "Type in a post inspiration",
    },
  ]);

  const [RespInsp, setRespInsp] = useState([
    {
      post_inspiration: "Type in a post inspiration",
    },
  ]);
  const [SynInsp, setSynInsp] = useState([
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
            <StarterPrompt
              starterPrompt={starterPrompt}
              starterPromptMode={starterPromptMode}
              setstarterPromptMode={setstarterPromptMode}
              setSaveState={setSaveState}
              setstarterPromptValue={setstarterPromptValue}
              //general
              setstarterPrompt={setstarterPrompt}
              setPostInsp={setPostInsp}
              setpostAs={setpostAs}
              setscores={setscores}
              setCalendar={setCalendar}
            />

            {/*POST INSPIRATION */}
            <PostInsp
              setPostInspMode={setPostInspMode}
              postInspMode={postInspMode}
              setSaveState={setSaveState}
              postInsp={postInsp}
              allPostInsp={allPostInsp}
              setAllPostInsp={setAllPostInsp}
              RespInsp={RespInsp}
              setRespInsp={setRespInsp}
              SynInsp={SynInsp}
              setSynInsp={setSynInsp}
              posting={posting}
              setPosting={setPosting}
              responding={responding}
              setResponding={setResponding}
              synthesizing={synthesizing}
              setSynthesizing={setSynthesizing}
              addCircle={addCircle}
              // general
              setstarterPrompt={setstarterPrompt}
              setPostInsp={setPostInsp}
              setpostAs={setpostAs}
              setscores={setscores}
              setCalendar={setCalendar}
            />

            {/*POST IN */}
            <PostAs
              postAs={postAs}
              setpostAsMode={setpostAsMode}
              postAsMode={postAsMode}
              allPostAs={allPostAs}
              setAllPostAs={setAllPostAs}
              addCircle={addCircle}
              // general
              setSaveState={setSaveState}
              setstarterPrompt={setstarterPrompt}
              setPostInsp={setPostInsp}
              setpostAs={setpostAs}
              setscores={setscores}
              setCalendar={setCalendar}
            />

            {/*SCORES */}
            <Scores
              setScoresMode={setScoresMode}
              scoresMode={scoresMode}
              scores={scores}
              automatic={automatic}
              setautomatic={setautomatic}
              scoresValue={scoresValue}
              reactionsValue={reactionsValue}
              setReactionsValue={setReactionsValue}
              setUpvoteValue={setUpvoteValue}
              totalValue={totalValue}
              setTotalValue={setTotalValue}
              rubMaxScore={rubMaxScore}
              midscore={midscore}
              allrubric={allrubric}
              setAllRubric={setAllRubric}
              setScoresValue={setScoresValue}
              addCircle={addCircle}
              // general
              setSaveState={setSaveState}
              setstarterPrompt={setstarterPrompt}
              setPostInsp={setPostInsp}
              setpostAs={setpostAs}
              setscores={setscores}
              setCalendar={setCalendar}
            />

            {/*CALENDAR */}
            <Calendar
              calendarMode={calendarMode}
              setCalendarMode={setCalendarMode}
              calendar={calendar}
              setShowCalDate={setShowCalDate}
              date={date}
              // general
              setSaveState={setSaveState}
              setstarterPrompt={setstarterPrompt}
              setPostInsp={setPostInsp}
              setpostAs={setpostAs}
              setscores={setscores}
              setCalendar={setCalendar}
            />
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
