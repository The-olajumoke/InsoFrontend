import React from "react";
import textFormat from "../../Exports/comment/text_format.svg";
import attFile from "../../Exports/comment/attach_file.svg";
import assessment from "../../Exports/comment/assessment.svg";
import insertPhoto from "../../Exports/comment/insert_photo.svg";
import code from "../../Exports/comment/htmlcode.svg";
import smile from "../../Exports/comment/sentiment_satisfied_alt.svg";
import cameraAlt from "../../Exports/comment/camera_alt.svg";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function StarterPrompt(props) {
  const {
    starterPrompt,
    starterPromptMode,
    setstarterPromptMode,
    setstarterPromptValue,
    setSaveState,
    setstarterPrompt,
    setPostInsp,
    setpostAs,
    setscores,
    setCalendar,
  } = props;
  return (
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
                setstarterPrompt(!starterPrompt);
                setPostInsp(false);
                setpostAs(false);
                setscores(false);
                setCalendar(false);
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
          <div className="commentBox  settingsBox">
            <textarea
              className="textA"
              name=""
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
  );
}

export default StarterPrompt;
