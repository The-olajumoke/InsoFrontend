import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiInboxArchiveLine } from "react-icons/ri";
import { BsFilterLeft } from "react-icons/bs";
import BodyWrapper from "../components/BodyWrapper";
import DiscussionBox from "../components/Discussion/DiscussionBox";
import ResponsiveTop from "../components/ResponsiveTop";
import "../Styling/Discussion/Discussion.css";
import NoMessageYet from "../components/Discussion/NoMessageYet";
import CreateNewDis from "../components/Discussion/CreateNewDis";
import history from "../utils/history";
import { allDiscData } from "../DummyData/discData";
import DiscSet from "../components/Discussion/DiscSetTemp";
import { getAllCount } from "../redux/Analytics/analyticsSlice";
import { useDispatch } from "react-redux";
import { endDisc } from "../redux/Discussion/disSlice";
function Discussion() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = (e) => {
    setShowMenu(!showMenu);
    dispatch(endDisc());
  };
  const DiscussionCont = allDiscData;

  return (
    <BodyWrapper>
      {showMenu && (
        <CreateNewDis showMenu={showMenu} handleClick={handleClick} />
      )}
      <ResponsiveTop title="Discussion Title" />
      <div className="disMain ">
        <div className="disCont ">
          <div className="discBtnCont">
            <button className="discBtn" onClick={handleClick}>
              <FiPlus className="icn" />
              Create new discussion
              <IoMdArrowDropdown className="icn" />
            </button>

            <div className="flex">
              <div
                onClick={() => history.push("./archives")}
                className="filterAndsort"
              >
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
            {/* DISCUSSION SET */}
            <DiscSet
              key="1"
              id="1"
              title="Discussion Set 1"
              date="mar 21"
              numberofDisc="3"
              name="Patrick Dempsey"
            />
            {/* DISCUSSION */}
            {DiscussionCont.length < 1 ? (
              <NoMessageYet message="It’s lonely in here. Create a new discussion" />
            ) : (
              DiscussionCont.map((dis, index) => (
                <DiscussionBox
                  key={index}
                  id={index}
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
