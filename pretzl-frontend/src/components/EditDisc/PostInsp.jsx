import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
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
  } = props;
  return (
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
              <input
                key={index}
                id={index}
                type="text"
                value={allPostInsp[index].post_inspiration}
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
          {responding &&
            RespInsp.map((ins, index) => (
              <input
                key={index}
                id={index}
                type="text"
                value={RespInsp[index].post_inspiration}
                onChange={(e) => {
                  let newInsp = [...RespInsp];
                  newInsp[e.target.id].post_inspiration = e.target.value;
                  setAllPostInsp(newInsp);
                  // console.log(allPostInsp);
                }}
                className="postInspInput mb-2 "
                // placeholder="Type in post inspirations..."
                // value={}
              />
            ))}
          {synthesizing &&
            SynInsp.map((ins, index) => (
              <input
                key={index}
                id={index}
                type="text"
                value={SynInsp[index].post_inspiration}
                onChange={(e) => {
                  let newInsp = [...SynInsp];
                  newInsp[e.target.id].post_inspiration = e.target.value;
                  setAllPostInsp(newInsp);
                  // console.log(allPostInsp);
                }}
                className="postInspInput mb-2 "
                placeholder="Type in post inspirations..."
              />
            ))}
          {/* ADD BUTTON */}
          {posting && (
            <div className="inspAddCircle">
              <img
                src={addCircle}
                alt=""
                onClick={() => {
                  const data = {
                    post_inspiration: "",
                  };
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
                  const data = {
                    post_inspiration: "",
                  };
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
                  const data = {
                    post_inspiration: "",
                  };
                  setSynInsp([...SynInsp, data]);
                }}
              />
            </div>
          )}

          <div className="addinsp">
            <button>Add post inspiration</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostInsp;
