import React from "react";

function PostDropDown({ arrs }) {
  const arr = ["buuu", "jnju"];
  return (
    <div className="    bg-white  z-10">
      <div className=" bg-textBody text-white">Please Select</div>
      {arr.map((option, index) => (
        <div key={index} className="analItem text-textBody">
          {option.description == "" ? null : option.description}
        </div>
      ))}
    </div>
  );
}

export default PostDropDown;
