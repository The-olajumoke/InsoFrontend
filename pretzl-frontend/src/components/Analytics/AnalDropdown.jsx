import React, { useState } from "react";

function AnalDropdown({ options }) {
  //options is an array of objects

  return (
    <div className=" analDropdown  bg-white  z-10  w-full p-0">
      <div className="analItem bg-textBody text-white">
        Please Select
      </div>
      {/* {options.map((option, index) => (
        <div key={index} className="analItem text-textBody">
          {option.description == "" ? null : option.description}
        </div>
      ))} */}
    </div>
  );
}

export default AnalDropdown;
