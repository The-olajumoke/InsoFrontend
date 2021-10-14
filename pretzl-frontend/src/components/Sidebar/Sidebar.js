import React from "react";
import "../../Styling/BodyWrapper.css";
import "../../Styling/SideBar.css";
import avatar from "../../Exports/Avatar.svg";
import NavItem from "./NavItem";
import { FiBarChart } from "react-icons/fi";
import { MdShowChart } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHeadsetMic } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";
import downloadImg from "../../Exports/downloadimg.svg";
function Sidebar({ navSize, setNavSize }) {
  const user = {
    firstName: "Patrick",
    lastName: "Dempsey",
  };
  const firstInit = user.firstName.split("")[0];
  const lastInit = user.lastName.split("")[0];

  return (
    <>
      <nav
        style={{ width: `${navSize == "small" ? "109px" : "25%"}` }}
        className="side-Cont font-Poppins"
      >
        <div className="flex flex-col ">
          <div
            className={`userDetailsCont ${
              navSize == "small" ? "justify-end" : "justify-center"
            }    ${navSize == "small" ? "pr-3" : ""}  `}
          >
            {/* WHEN IMAGE IS UPDATED */}
            {/* <img className={`user-img ${navSize =="small"? "mb-5": ""}`} src={avatar} alt="" />
          > */}
            <h2 className={`user-img ${navSize == "small" ? "mb-5" : ""}`}>{firstInit} {lastInit}</h2>
            <div
              className={`details ${navSize == "small" ? "hidden" : "flex"} `}
            >
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <span>@patrick</span>
            </div>
          </div>
          <h2 className={`starter ${navSize == "small" ? "hidden" : "flex"}`}>
            Starter
          </h2>
        </div>

        <div className=" allNavItems">
          <NavItem
            navSize={navSize}
            title="Discussions"
            icon={<MdChatBubbleOutline />}
            path="/discussion"
            active
          />
          <NavItem
            navSize={navSize}
            title="Nofications"
            icon={<IoMdNotificationsOutline />}
            path="/notifications"
          />
          <NavItem
            navSize={navSize}
            title="Analytics"
            icon={<MdChatBubbleOutline />}
            path="/analytics"
            active
          />

          <NavItem
            navSize={navSize}
            title="Charts "
            icon={<FiBarChart />}
            path="/charts"
          />
          <NavItem
            navSize={navSize}
            title="Calendar"
            icon={<FaRegCalendar />}
            path="/calendar"
          />
          <NavItem
            navSize={navSize}
            title="Grades"
            icon={<MdShowChart />}
            path="/grades"
          />
          <NavItem
            navSize={navSize}
            title="Contact us"
            icon={<MdHeadsetMic />}
            path="/contact"
          />
          <NavItem
            navSize={navSize}
            title="Settings"
            icon={<IoSettingsOutline />}
            path="/settings"
          />
        </div>
        <div
          className={` downBtnCont 
         ${navSize == "small" ? "px-0" : "px-12"}
         ${navSize == "small" ? "mt-16" : "mt-10"}
            ${navSize == "small" ? " pl-10" : ""}
    ${navSize == "small" ? "justify-end" : "justify-items-start"}
    ${navSize == "small" ? "" : "mr-4"}
    `}
        >
          <button
            className={`upgradeBtn  ${navSize == "small" ? "" : "p-3"} flex 
                ${
                  navSize == "small"
                    ? "justify-items-end"
                    : "justify-items-start"
                }
            `}
            style={{
              width: `${navSize == "small" ? "auto" : "230px"}
            `,
            }}
          >
            <img src={downloadImg} alt="" />
            <h3
              className={` ${navSize == "small" ? "hidden" : "flex"}
          `}
            >
              Upgrade
            </h3>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
