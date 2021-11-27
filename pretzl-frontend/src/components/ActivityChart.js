import React, { useEffect, useState } from "react";
import ActivityItem from "./ActivityItem";
// import store from "../redux/store";
import axios from "axios";

function ActivityChart({}) {
  const [counts, setCounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCounts = async () => {
    var apiBaseUrl =
      "http://localhost:8080/api/auth/discussion/postreactions?username=Bhaskar";

    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";

    try {
      const res = await axios.get(apiBaseUrl);
      const data = res.data;
      console.log(data);
      setCounts(data);
      // console.log(counts);
      return data;
    } catch (error) {
      console.log({ ...error });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userCounts = await getCounts();
      // console.log(userCounts);
      // setCounts(userCounts);
      setLoading(true);
    };
    fetchData();
  }, []);

  return (
    <div className="allActCont">
      
      {counts.map((cnt, index) => (
        <ActivityItem key={index} count={`${cnt.count}`} />
      ))}
      
    </div>
  );
}
export default ActivityChart;
