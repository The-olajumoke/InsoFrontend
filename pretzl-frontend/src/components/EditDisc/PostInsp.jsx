import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import deleteIc from "../../Exports/delete.svg";
function PostInsp(props) {
  const {
    setPostInspMode,
    postInspMode,
    setSaveState,
    postInsp,
    setstarterPrompt,
    setPostInsp,
    setpostAs,
    setscores,
    setCalendar,
    allPostInsp,
    setAllPostInsp,
    posting,
    setPosting,
    responding,
    setResponding,
    synthesizing,
    setSynthesizing,
    addCircle,
    RespInsp,
    setRespInsp,
    SynInsp,
    setSynInsp,
    DelPostInsp,
    DelResInsp,
    DelSynInsp,
  } = props;
  return (
    <div className="settingsMainCont">
      <div className="settingsTop ">
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
                setPostInsp(!postInsp);
                setstarterPrompt(false);
                setpostAs(false);
                setscores(false);
                setCalendar(false);
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
                setPostInsp(!postInsp);
                setpostAs(false);
                setscores(false);
                setCalendar(false);
              }}
            />
          )}
        </div>
      </div>
      {postInsp ? (
        <div className={`postInspMore ${postInspMode ? "" : "unactive"}`}>
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
          {posting &&
            allPostInsp.map((ins, index) => (
              <div className="inputCont shadow-sm">
                <textarea
                  key={index}
                  id={index}
                  type="text"
                  value={allPostInsp[index]}
                  onChange={(e) => {
                    let newInsp = [...allPostInsp];
                    newInsp[e.target.id] = e.target.value;
                    setAllPostInsp(newInsp);
                  }}
                  className="postInspInput"
                  placeholder="Type in post inspirations..."
                ></textarea>
                <img
                  className="deleteIc"
                  id={index}
                  src={deleteIc}
                  onClick={(e) => {
                    DelPostInsp(e.target.id);
                  }}
                  alt=""
                />
              </div>
            ))}
          {responding &&
            RespInsp.map((ins, index) => (
              <div className="inputCont shadow-sm">
                <textarea
                  key={index}
                  id={index}
                  type="text"
                  value={RespInsp[index]}
                  onChange={(e) => {
                    let newInsp = [...RespInsp];
                    newInsp[e.target.id] = e.target.value;
                    setRespInsp(newInsp);
                  }}
                  className="postInspInput"
                ></textarea>
                <img
                  className="deleteIc"
                  id={index}
                  src={deleteIc}
                  onClick={(e) => {
                    DelResInsp(e.target.id);
                  }}
                  alt=""
                />
              </div>
            ))}
          {synthesizing &&
            SynInsp.map((ins, index) => (
              <div className="inputCont shadow-sm">
                <textarea
                  key={index}
                  id={index}
                  type="text"
                  value={SynInsp[index]}
                  onChange={(e) => {
                    let newInsp = [...SynInsp];
                    newInsp[e.target.id] = e.target.value;
                    setSynInsp(newInsp);
                    // console.log(allPostInsp);
                  }}
                  className="postInspInput"
                  placeholder="Type in post inspirations..."
                ></textarea>
                <img
                  className="deleteIc"
                  id={index}
                  src={deleteIc}
                  onClick={(e) => {
                    DelSynInsp(e.target.id);
                  }}
                  alt=""
                />
              </div>
            ))}
          {/* ADD BUTTON */}
          {posting && (
            <div className="inspAddCircle">
              <img
                src={addCircle}
                alt=""
                onClick={() => {
                  const data = "";
                  setAllPostInsp([...allPostInsp, data]);
                }}
              />
            </div>
          )}
          {responding && (
            <div className="inspAddCircle">
              <img
                src={addCircle}
                alt=""
                onClick={() => {
                  const data = "";
                  setRespInsp([...RespInsp, data]);
                }}
              />
            </div>
          )}
          {synthesizing && (
            <div className="inspAddCircle">
              <img
                src={addCircle}
                alt=""
                onClick={() => {
                  const data = "";
                  setSynInsp([...SynInsp, data]);
                }}
              />
            </div>
          )}

          <div className="addinsp">
            <button>Add post inspiration</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PostInsp;
