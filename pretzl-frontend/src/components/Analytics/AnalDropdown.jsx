import React, { useState } from "react";

function AnalDropdown({ options }) {
  const [dropDown, setdropDown] = useState();

  return (
    <div className=" analDropdown  bg-white  z-10 w-3/4 p-0">
      {options.map((option, index) => (
        <div key={index} className="analItem text-textBody">
          {option}
        </div>
      ))}
    </div>
  );
}

export default AnalDropdown;
