import React from "react";
import Img from "../../Exports/Back.svg";

function Page({ children }) {
  return (
    <div className=" overlay ">
      <img className=" overlayImg w-full h-24 " src={Img} alt="" />
      <div className="  w-full  z-10">{children}</div>
    </div>
  );
}

export default Page;
