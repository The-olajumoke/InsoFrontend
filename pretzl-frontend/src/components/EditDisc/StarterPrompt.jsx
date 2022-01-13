import React from "react";
import textFormat from "../../Exports/comment/text_format.svg";
import attFile from "../../Exports/comment/attach_file.svg";
import assessment from "../../Exports/comment/assessment.svg";
import insertPhoto from "../../Exports/comment/insert_photo.svg";
import code from "../../Exports/comment/icomoon-free_embed2.svg";
import smile from "../../Exports/comment/sentiment_satisfied_alt.svg";
import cameraAlt from "../../Exports/comment/camera_alt.svg";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function StarterPrompt(props) {
  const{ starterPrompt,
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
            >
              {/* {`1. In this discussion we are going to be exploring.
                     2.If you are responding directly to my initial post, you can select a specific channel to post in by selecting the appropriate tag from the "Post in" dropdown menu.
                    3. For all posts and responses, be sure to #hashtag any keywords or themes.
                    4. For some ideas on what sorts of things you should post, click Posting Inspiration and explore the prompts for posting, responding and synthesizing.

`} */}
            </textarea>
            <div className="widgetCont">
              <div className="widget settingsWidget border">
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
