import React from "react";
import "../../Styling/Discussion/ViewStarterPrompt.css";
import promptCancel from "../../Exports/promptCancel.svg";

function ViewStarterPrompt({ togglePrompt }) {
  return (
    <div className="starterOverlay">
      <div className="starterCont">
        <div className="flex items-start">
          <h4>
            Starter prompt are editable instructions to help start a discussion.
          </h4>
          <img
            src={promptCancel}
            onClick={togglePrompt}
            alt=""
            className="bg-white  bg-opacity-20"
          />
        </div>
        <div className="flex justify-end gap-3">
          <button onClick={togglePrompt}>Skip</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default ViewStarterPrompt;
