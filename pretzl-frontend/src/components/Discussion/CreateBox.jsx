import React, { useState } from "react";
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";

function CreateBox({ id, handleDelete }) {
  const [value, setvalue] = useState();
  return (
    <div className="newBox " id={id}>
      <div className="newBox-header">
        <button className="newBox-button" disabled>
          Open discussion
        </button>
        <div className="newBox-icons">
          <MdDelete id={id} className="new-icon " onClick={handleDelete(id)} />
          <MdOutlineModeEdit className="new-icon" />
        </div>
      </div>
      <textarea
        className=" newBox-textarea "
        name=""
        id=""
        onChange={(e) => setvalue(e.target.value)}
        maxLength={50}
        placeholder="Input discussion title"
      ></textarea>
    </div>
  );
}

export default CreateBox;
