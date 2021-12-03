import React, { useEffect, useState } from "react";
import BodyWrapper from "../components/BodyWrapper";
import TopDiscusionText from "../components/Analytics/TopDiscusionText";
import "../Styling/Analytics/Analytics.css";
import OverviewImg from "../Exports/dashboard/Pie Circular@2x.png";
import Courses from "../components/Analytics/Courses";
import ResponsiveTop from "../components/ResponsiveTop";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import Discussion from "../components/Analytics/Discussion";
import Threads from "../components/Analytics/Threads";
import store from "../redux/store";
import { useDispatch } from "react-redux";
import "../Styling/CustomInput.css";
import axios from "axios";

import EngTemplate from "../components/Analytics/EngTemplate";
import { IoIosArrowBack } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import Charts from "../components/Analytics/Charts";
const Overview = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("courses");
  const [options, setOptions] = useState([""]);
  const [thread, setThread] = useState([""]);
  const [discSet, setDiscSet] = useState([""]);
  const [totalSetCount, setTotalSetCount] = useState([0]);
  const [totaldisCount, setTotalDisCount] = useState([0]);
  const [totalUserCount, setTotalUserCount] = useState([0]);
  const [totalPostCount, setTotalPostCount] = useState([0]);
  const [radioButton, setRadioButton] = useState("Posts");
  const [engMenu, setengMenu] = useState(true);
  const [width, setWidth] = useState(React.useState(window.innerWidth));

  const breakpoint = 620;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  const handleClick = (e) => {
    setActive(e.target.name);
  };
  const getAllDisc = async () => {
    let apiBaseUrl =
      "http://localhost:8080/api/auth/discussion/discussions?username=Bhaskar";

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
    }
  };
  const getDisSet = async () => {
    var apiBaseUrl =
      "http://localhost:8080/api/auth/discussion/sets?username=Bhaskar";

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
    }
  };
  const getThread = async () => {
    var apiBaseUrl =
      "http://localhost:8080/api/auth/threads/all?username=Bhaskar";

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
    }
  };

  const getTotalDisCount = async () => {
    var apiBaseUrl =
      "http://localhost:8080/api/auth/discussion/discussions/count?username=Bhaskar";
    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";

    try {
      const res = await axios.get(apiBaseUrl);
      const data = res.data;
      return data;
    } catch (error) {
      console.log({ ...error });
    }
  };
  const getTotalDisSetCount = async () => {
    let apiBaseUrl =
      "http://localhost:8080/api/auth/discussion/sets/count?username=Bhaskar";

    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";

    try {
      const res = await axios.get(apiBaseUrl);
      const data = res.data;
      return data;
    } catch (error) {
      console.log({ ...error });
    }
  };
  const getTotalpostCount = async () => {
    var apiBaseUrl =
      "http://localhost:8080/api/auth/discussion/posts/count?username=Bhaskar";
    // "localhost:8080/api/auth/discussion/posts/count?username=Bhaskar";
    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";

    try {
      const res = await axios.get(apiBaseUrl);
      const data = res.data;
      return data;
    } catch (error) {
      console.log({ ...error });
    }
  };
  const getTotalUserCount = async () => {
    var apiBaseUrl =
      "http://localhost:8080/api/auth/discussion/users/count?username=Bhaskar";
    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";

    try {
      const res = await axios.get(apiBaseUrl);
      const data = res.data;
      return data;
    } catch (error) {
      console.log({ ...error });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const set = await getDisSet();
      const disc = await getAllDisc();
      const threads = await getThread();
      console.log(threads);
      let TotaldisCount = await getTotalDisCount();
      TotaldisCount = TotaldisCount.count;
      let TotalDisSetCount = await getTotalDisSetCount();
      TotalDisSetCount = TotalDisSetCount.count;
      let TotalPostCount = await getTotalpostCount();
      TotalPostCount = TotalPostCount.count;
      let TotalUser = await getTotalUserCount();
      TotalUser = TotalUser.count;
      // console.log(set);
      console.log(disc);
      setThread(threads)
      setDiscSet(set);
      setOptions(disc);
      setTotalDisCount(TotaldisCount);
      setTotalSetCount(TotalDisSetCount);
      setTotalPostCount(TotalPostCount);
      setTotalUserCount(TotalUser);
    };
    fetchData();
  }, []);

  return (
    <BodyWrapper>
      <ResponsiveTop title="Analytics" />
      <div className=" overMain  ">
        <div className=" overviewCont">
          {/* first section */}
          <div className="courses-overview">
            <div className="contForWidth ">
              <div className="course-item">
                <h4>Discussion set</h4>
                <h2>{totalSetCount}</h2>
              </div>
              <div className="course-item">
                <h4>Discussions</h4>
                <h2>{totaldisCount}</h2>
              </div>
              <div className="course-item">
                <h4>Users</h4>
                <h2>{totalUserCount}</h2>
              </div>
              <div className="course-item">
                <h4>Posts</h4>
                <h2>{totalPostCount}</h2>
              </div>
            </div>
          </div>

          {/* SECOND SECTION */}
          {/*Discussions*/}
          <div className="secondSect ">
            <div className=" sect1">
              <div className="sectDetails">
                <h3>
                  Activity Chart
                  <IoMdArrowDropdown />
                </h3>
                <div className="flex  gap-4">
                  <button>Show all</button>
                  <button>
                    Month
                    <IoMdArrowDropdown />
                  </button>
                  <div className="zoomBtn">
                    <div>
                      <FiMinus />
                    </div>
                    <div>
                      <FiPlus />
                    </div>
                  </div>
                </div>
              </div>

              <div className="trial">
                {active == "courses" && (
                  <Courses options={discSet} handleClick={handleClick} />
                )}
                {active == "discussions" && (
                  <Discussion options={options} handleClick={handleClick} />
                )}
                {active == "threads" && (
                  <Threads handleClick={handleClick} options={options} />
                )}
              </div>
            </div>

            {/* RADIO BUTTONS */}
            <div className="sect2">
              <div className="postTypes">
                <input
                  type="radio"
                  value="Users"
                  name="type"
                  id=""
                  // checked={() => (radioButton = "Users")}
                  onChange={(e) => {
                    setRadioButton(e.target.value);
                    console.log(e.target.checked);
                  }}
                  checked={radioButton === "Users"}
                />
                <label>Users</label>
              </div>
              <div className="postTypes">
                <input
                  type="radio"
                  value="Posts"
                  name="type"
                  id=""
                  checked={radioButton === "Posts"}
                  onChange={(e) => {
                    setRadioButton(e.target.value);
                  }}

                  // defaultChecked
                />
                <label>Posts</label>
              </div>
              <div className="postTypes">
                <input
                  type="radio"
                  name="type"
                  value="Reactions"
                  id=""
                  checked={radioButton === "Reactions"}
                  onChange={(e) => {
                    setRadioButton(e.target.value);
                  }}
                />
                <label>Reactions</label>
              </div>
              <div className="postTypes">
                <input
                  type="radio"
                  value="Upvotes"
                  name="type"
                  id=""
                  checked={radioButton === "Upvotes"}
                  onChange={(e) => {
                    setRadioButton(e.target.value);
                  }}
                />
                <label>Upvotes</label>
              </div>
            </div>
          </div>
          {/* THIRD SECTION */}
          {/*Thread*/}
          <div className="TopDisCont ">
            <div className="TopDis">
              <div className="TopDisFlex TopDisHeader">
                {/* discusSet */}
                <div className="tempItem subTopic first ">Discussion set</div>
                <div className="tempItem engcount engHeader">
                  {width > breakpoint ? "Users" : "U"}
                </div>
                <div className="tempItem engcount engHeader">
                  {width > breakpoint ? "Posts" : "P"}
                </div>
                <div className="tempItem engcount engHeader">
                  {width > breakpoint ? "Word count" : "C"}
                </div>
                <div className="tempItem  engHeader last">
                  {width > breakpoint ? "Instructor’s post" : "I"}
                </div>
              </div>
              <EngTemplate
                set="The Economics of Democracy."
                // sub="Economics & Politics"
                users="12"
                posts="26"
                word="100"
                instructor="67"
              />
              <EngTemplate
                set="The Economics of Democracy."
                sub="/Economics & Politics"
                users="12"
                posts="26"
                word="100"
                instructor="67"
              />
            </div>
            <div className="EngRate">
              <h2 className="header">Engagement Rate</h2>
              <h4 className="subHeader">State on how well a post is doing.</h4>
              {engMenu ? (
                <div className="allEngItems">
                  <div className="engItem">
                    <h2 className="">No. of users:</h2>
                    <h4 className="">12</h4>
                  </div>
                  <div className="engItem ">
                    <h2>Total posts:</h2>
                    <h4>60</h4>
                  </div>
                  <div className="engItem ">
                    <h2>Avg post per user:</h2>
                    <h4>7</h4>
                  </div>
                  <div className="engItem ">
                    <h2>Least post per user:</h2>
                    <h4>1</h4>
                  </div>
                  <div className="engItem ">
                    <h2>Most post per user:</h2>
                    <h4>13</h4>
                  </div>
                </div>
              ) : (
                <div className=" engChart">
                  <Charts active="12.5" />
                </div>
              )}
              {engMenu ? (
                <button className="right">
                  <IoIosArrowForward
                    className="engIcon "
                    onClick={() => {
                      setengMenu(!engMenu);
                    }}
                  />
                </button>
              ) : (
                <button className="engBtn">
                  <IoIosArrowBack
                    className="engIcon"
                    onClick={() => {
                      setengMenu(!engMenu);
                    }}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default Overview;
