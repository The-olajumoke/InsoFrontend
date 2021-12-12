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
import axios from "axios";
function Discussion() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [DiscussionCont, setDiscussionCont] = useState([]);
  const handleClick = (e) => {
    setShowMenu(!showMenu);
    dispatch(endDisc());
  };
  // const DiscussionCont = allDiscData;

  const getTotalDiscussions = async () => {
    const currentUsername = localStorage.getItem("username");

    var apiBaseUrl = `http://localhost:8080/api/auth/discussion/discussions?username=${currentUsername}`;

    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";
    try {
      const res = await axios.get(apiBaseUrl);
      const data = res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log({ ...error });
      return DiscussionCont;
    }
  };

  useEffect(() => {
    const fetchDiscussions = async () => {
      const discussions = await getTotalDiscussions();
      setDiscussionCont(discussions);
    };
    fetchDiscussions();
  }, []);
  return (
    <BodyWrapper>
      {showMenu && (
        <CreateNewDis showMenu={showMenu} handleClick={handleClick} />
      )}
      <ResponsiveTop title="Discussion Title" />
      <div className="disMain ">
        <div className="disCont">
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
            {
              // DiscussionCont.length < 1 ? (
              //   <NoMessageYet message="It’s lonely in here. Create a new discussion" />
              // ) : (
              DiscussionCont.map((dis, index) => (
                <DiscussionBox
                  key={index}
                  id={index}
                  title={dis.description}
                  date={dis.date}
                  numberOfPeople={dis.numberOfPeople}
                  name={dis.username}
                  code={dis.code}
                />
              ))
              // )
            }
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default Discussion;
