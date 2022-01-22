import React from "react";
import deleteIc from "../../Exports/delete.svg";
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
    DelPostAs,
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
                setpostAs(!postAs);
                setstarterPrompt(false);
                setPostInsp(false);
                setscores(false);
                setCalendar(false);
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
          <div className=" allPostAsBtn">
            {allPostAs.map((pos, index) => (
              <div className="postAsCont shadow-md">
                <input
                  id={index}
                  key={index}
                  type="text"
                  className="postAsBtn"
                  placeholder="channel"
                  value={allPostAs[index]}
                  onChange={(e) => {
                    let newpostAs = [...allPostAs];
                    newpostAs[e.target.id] = e.target.value;
                    setAllPostAs(newpostAs);
                    // console.log(allPostInsp);
                  }}
                />
                <img
                  className="deletePostIc"
                  id={index}
                  src={deleteIc}
                  onClick={(e) => {
                    DelPostAs(e.target.id);
                  }}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            {" "}
            <img
              src={addCircle}
              alt=""
              onClick={() => {
                const data = "";
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
