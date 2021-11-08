import React, { useEffect, useState } from "react";
import ActivityItem from "./ActivityItem";
import store from "../redux/store";
import axios from "axios";

function ActivityChart({}) {
  const [counts, setCounts] = useState([]);
  const getCounts = async () => {
    var apiBaseUrl =
      "http://localhost:8080/api/auth/analytics?username=Bhaskar";

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
      const userCounts = await getCounts();
      console.log(userCounts);

      setCounts(userCounts);
    };
    // fetchData();
  }, []);

  console.log(counts);
  return (
    <div className="allActCont">
      {/* {count.map((cnt, index) => ( */}
      <ActivityItem height="40" />
      <ActivityItem height="90" />
      <ActivityItem height="50" />
      <ActivityItem height="90" />
      <ActivityItem height="90" />

      {/* {counts.map((cnt, index) => {
      return  <ActivityItem key={index} height={`${cnt.count}`}  />;
        // alert(`${cnt.action_type}`);
      })} */}
      {/* <ActivityItem height="80" />
      <ActivityItem height="84" />
      <ActivityItem height="144" />
      <ActivityItem height="96" />
      <ActivityItem height="248" />
      <ActivityItem height="96" />
      <ActivityItem height="144" />
      <ActivityItem height="248" />
      <ActivityItem height="300" />
      <ActivityItem height="168" />
      <ActivityItem height="96" /> */}
    </div>
  );
}

export default ActivityChart;
