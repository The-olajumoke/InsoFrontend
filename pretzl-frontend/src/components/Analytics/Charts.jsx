import React from "react";
import { Doughnut } from "react-chartjs-2";
function Charts({ active }) {
  const user = 100 - active;
  const data = {
    labels: ["Active", "Users"],
    datasets: [
      {
        // label: "# of Votes",
        data: [active, user],
        backgroundColor: ["rgba(7, 160, 152, 1)", "rgba(14, 180, 246, 1)"],
        borderColor: ["rgba(7, 160, 152, 1)", "rgba(14, 180, 246, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className=" h-full relative">
      <Doughnut data={data} className="chart" />
      <div className="absolute  top-0 left-0 right-0 bottom-0 my-auto">
        <h3 className="">{active}%</h3>
        <h5>Active</h5>
      </div>
    </div>
  );
}

export default Charts;
