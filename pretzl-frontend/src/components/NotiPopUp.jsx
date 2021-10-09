import React from "react";
import PopIcon from "./PopIcon";

function NotiPopUp({ icon, text }) {
  return (
    <div className="notipopup">
      <PopIcon />
      <div>
        <h2>Unable to post discussion.</h2>
        <h3>No text found in discussion text field.</h3>
      </div>
    </div>
  );
}

export default NotiPopUp;
