import React, { useState } from "react";
import BodyWrapper from "../components/BodyWrapper";
import ResponsiveTop from "../components/ResponsiveTop";
import Notific from "../components/Settings/Notific";
import Plan from "../components/Settings/Plan";
import Profile from "../components/Settings/Profile";
import Security from "../components/Settings/Security";

import "../Styling/settings/settings.css"

function Settings() {
  const [active, setActive] = useState("profile");

  const handleClick = (e) => {
    console.log(e.target.name);
    setActive(e.target.name);
  };
  return (
    <BodyWrapper>
      <ResponsiveTop title="Settings" />

      <div className="setMain font-Poppins">
        {/* <SettingHeader /> */}
        <div className="setCont">
          {active == "profile" && <Profile handleClick={handleClick} />}
          {active == "security" && <Security handleClick={handleClick} />}
          {active == "plan" && <Plan handleClick={handleClick} />}
          {active == "notification" && <Notific handleClick={handleClick} />}
        </div>
      </div>
    </BodyWrapper>
  );
}

export default Settings;
