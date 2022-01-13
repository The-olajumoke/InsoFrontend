import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
function PostAs(props) {
  const {
    postAsMode,
    setpostAsMode,
    setSaveState,
    setstarterPrompt,
    setPostInsp,
    setpostAs,
    setscores,
    setCalendar,
    postAs,
    allPostAs,
    setAllPostAs,
    addCircle,
  } = props;
  return (
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
          <div className=" allPostAsBtn ">
            {allPostAs.map((pos, index) => (
              <input
                id={index}
                type="text"
                className="postAsBtn"
                placeholder="#channel"
                value={allPostAs[index].post_in}
                onChange={(e) => {
                  let newpostAs = [...allPostAs];
                  newpostAs[e.target.id].post_in = e.target.value;
                  setAllPostAs(newpostAs);
                  // console.log(allPostInsp);
                }}
              />
            ))}
          </div>
          <div className="flex justify-end">
            {" "}
            <img
              src={addCircle}
              alt=""
              onClick={() => {
                const data = { post_in: "" };
                setAllPostAs([...allPostAs, data]);
              }}
            />
          </div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
}

export default PostAs;
