import React, { useState } from "react";
import Logo from "../Exports/inso 4@2x.png";
import "../Styling/header.css"
import history from "../utils/history";
function Header() {
  return (
    <>
      <div className="headerCont">
        <div className="imgCont">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="buttonCont">
          <button
            name="chooseUser"
            className="headerBtn"
            onClick={() => {
              history.push("./sign-up");
            }}
          >
            Sign up
          </button>
          <button
            name="logInUser"
            className="headerBtn headerBtn2 "
            onClick={() => {
              history.push("log-in");
            }}
          >
            Log in
          </button>
         
        </div>

      </div>
    </>
  );
}

export default Header;
