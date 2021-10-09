import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import landingimg from "../Exports/landingimg.svg";
import landingCircle from "../Exports/landingcircle.svg";
import { FiMessageSquare } from "react-icons/fi";
import "../Styling/Landing.css";
import CustomizedSnackbars from "../components/NotiPopUp";
// import NotiPopUp from "../components/NotiPopUp";

const Landing = () => {
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className=" h-auto sm:h-auto font-Poppins w-full p-0 flex flex-col items-center justify-between ">
      <Header />

      <div className=" bodyCont">
        <div className="landingLeft   ">
          <div className=" textCont">
            <div className=" maintext">
              <h1>Share ideas,</h1>
              <h1> discover meaning.</h1>
            </div>
            <h4 className="subText">
              Education, presentations, collaboration. Engage, interact, and
              create ideas together.
            </h4>
          </div>
          <div className="createDisCont">
            <button className="createBtn">
              <FiMessageSquare className="icon" />
              Create discussion
            </button>
            <div className="flex">
              {value.length == "" ? (
                <input
                  className="createBtn2 placeholder"
                  type="text"
                  value={value}
                  onChange={handleKey}
                  placeholder="Enter Inso code"
                />
              ) : (
                <input
                  className="createBtn2 selected"
                  type="text"
                  value={value}
                  onChange={handleKey}
                  placeholder="Enter Inso code"
                />
              )}
              {value.length > 0 && <button className="joinBtn">Join</button>}
            </div>
          </div>
        </div>

        <div className=" mockupCont  overflow-hidden sm:overscroll-none">
          <div className="contRel">
            <img className="landingCircle" src={landingCircle} alt="" />
            <img className="mockup" src={landingimg} draggable="false" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Landing;
