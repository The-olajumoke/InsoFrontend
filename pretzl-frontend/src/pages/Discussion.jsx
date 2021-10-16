import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiInboxArchiveLine } from "react-icons/ri";
import { BsFilterLeft } from "react-icons/bs";
import BodyWrapper from "../components/BodyWrapper";
import DiscussionBox from "../components/Discussion/DiscussionBox";
import ResponsiveTop from "../components/ResponsiveTop";
import "../Styling/Discussion.css";
import NoMessageYet from "../components/Discussion/NoMessageYet";
import CreateNewDis from "../components/Discussion/CreateNewDis";

function Discussion() {
const [showMenu, setShowMenu] = useState(false) 
  const handleClick =(e)=>{
    console.log(e.target);
    setShowMenu(!showMenu)
    alert('clkiue')
  }
  const DiscussionCont = [];
  // const DiscussionCont = [
  //   {
  //     title: "Price Action in Foreign Exchange",
  //     date: "Mar 21",
  //     numberOfPeople: "4",
  //     name: "Patrick Dempsey",
  //     code: "51RP70F",
  //   },
  //   {
  //     title: "Types of Mineral Resources",
  //     date: "Mar 21",
  //     numberOfPeople: "2",
  //     name: "Fakomi Idowu",
  //     code: "89RWT2",
  //   },
  //   {
  //     title: "Benefits of Foreign Exchange",
  //     date: "Mar 21",
  //     numberOfPeople: "3",
  //     name: "Patrick Dempsey",
  //     code: "51RP70F",
  //   },
  //   {
  //     title: "Types of Mineral Resources",
  //     date: "Mar 21",
  //     numberOfPeople: "2",
  //     name: "Patrick Dempsey",
  //     code: "51RP70F",
  //   },
  //   {
  //     title: "Price Action in Foreign Exchange",
  //     date: "Mar 21",
  //     numberOfPeople: "4",
  //     name: "Patrick Dempsey",
  //     code: "51RP70F",
  //   },
  //   {
  //     title: "Price Action in Foreign Exchange",
  //     date: "Mar 21",
  //     numberOfPeople: "4",
  //     name: "Patrick Dempsey",
  //     code: "51RP70F",
  //   },
  // ];
  return (
    <BodyWrapper>
      <ResponsiveTop title="Discussion Title" />
      <div className="disMain ">
        <div className="disCont">
          <div className="discBtnCont">
            <button className="discBtn">
              <FiPlus className="icn" />
              Create new discussion
              <IoMdArrowDropdown className="icn" onClick={handleClick} />
              {showMenu && <CreateNewDis />}
            </button>

            <div className="flex">
              <div className="filterAndsort">
                <RiInboxArchiveLine className="topIcon" />
                Archives
              </div>
              <div className="filterAndsort">
                <BsFilterLeft className="topIcon" />
                Sort by...
              </div>
            </div>
          </div>
          <div className="allDisCont">
            {DiscussionCont.length < 1 ? (
              <NoMessageYet message="It’s lonely in here. Create a new discussion" />
            ) : (
              DiscussionCont.map((dis, index) => (
                <DiscussionBox
                  title={dis.title}
                  date={dis.date}
                  numberOfPeople={dis.numberOfPeople}
                  name={dis.name}
                  code={dis.code}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default Discussion;
