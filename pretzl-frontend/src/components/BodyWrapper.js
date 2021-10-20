import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import SideHeading from "./Sidebar/sideHeading";
import "../Styling/BodyWrapper.css";
import toggleBtnOpen from "../Exports/Toggle.svg";
import store from "../redux/store";
import toggleBtnClosed from "../Exports/Hamburger.svg";
import ResponsiveSideBar from "./Sidebar/ResponsiveSideBar";
import { useDispatch } from "react-redux";
import { setCurrentNavSize } from "../redux/User/userSlice";

function BodyWrapper({ children }) {
  const dispatch = useDispatch();
  let current = store.getState();
  // useEffect(() => {
  //   console.log("useEffect");

  // }, []);

  const [navSize, setNavSize] = useState(current.user.navSize);
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    if (navSize == "small") {
      // setNewIcon(toggleBtnOpen);
      dispatch(setCurrentNavSize("large"));
      setNavSize("large");
    } else {
      // setNewIcon(toggleBtnClosed);
      setNavSize("small");
      dispatch(setCurrentNavSize("small"));
    }
  };

  const ResponsiveHandleClick = () => {
    setNavOpen((navOpen) => !navOpen);
  };
  return (
    <div className="body-wrapper font-Poppins">
      <SideHeading
        navSize={navSize}
        handleClick={handleClick}
        ResponsiveHandleClick={ResponsiveHandleClick}
      />

      {/* <ResponsiveSideBar/> */}
      <div className=" secondCont flex">
        {navOpen ? (
          <ResponsiveSideBar />
        ) : (
          <Sidebar
            navSize={navSize}
            // setNavSize={setNavSize}
          />
        )}

        {/* {Children} */}
        <div className={`secondContItem `}>{children}</div>
      </div>
    </div>
  );
}

export default BodyWrapper;
