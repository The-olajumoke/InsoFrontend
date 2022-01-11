import React, { useState } from "react";
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";
import img from "../../Exports/createDiscDel.svg";
import img2 from "../../Exports/createDiscEdit.svg";
function CreateBox({ id, val, handleDelete, handleEdit, setAct }) {
  // const [value, setvalue] = useState();
  return (
    <div className="newBox " id={id}>
      <div className="newBox-header">
        <button className="newBox-button" disabled>
          Open discussion
        </button>
        <div className="newBox-icons">
          {/* <MdDelete id={id} className="new-icon" /> */}
          <img
            src={img}
            id={id}
            alt=""
            className="new-icon"
            onClick={(e) => handleDelete(val)}
          />
        </div>
      </div>
      <textarea
        className=" newBox-textarea "
        name=""
        id=""
        value={val}
        onChange={handleEdit(id)}
        maxLength={50}
        placeholder="Input discussion title"
      >
        {val}
      </textarea>
    </div>
  );
}

export default CreateBox;

// Payload:
// {
//     "username":"Bhaskar.Sadineni",
//     "discussions":[
//         {
//           "description":"discussion1",
//           "set_id":"efweh3232"
//         },
//         {
//           "description":"discussion2",
//           "set_id":"efweh3232"
//         }
//     ]
// }
