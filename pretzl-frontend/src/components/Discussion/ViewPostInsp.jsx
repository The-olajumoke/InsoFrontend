import React, { useState } from "react";
import "../../Styling/Discussion/ViewPostInsp.css";
import "../../Styling/Discussion/EditDis.css";
import clear from "../../Exports/clear.svg";

function ViewPostInsp({ togglePostInsp, postInsp }) {
  console.log(postInsp);
  const [posting, setPosting] = useState(true);
  const [responding, setResponding] = useState(false);
  const [synthesizing, setSynthesizing] = useState(false);
  const [allPostInsp, setAllPostInsp] = useState(
    postInsp.updateDiscussion.postInspirations[0].comments
  );
  const [RespInsp, setRespInsp] = useState(
    postInsp.updateDiscussion.postInspirations[1].comments
  );
  const [SynInsp, setSynInsp] = useState(
    postInsp.updateDiscussion.postInspirations[2].comments
  );

  return (
    <div className="seeAllPostInsp">
      <div className="flex w-full justify-between items-center mb-5">
        <h2>Post Inspirations</h2>
        <img src={clear} alt="" onClick={togglePostInsp} />
      </div>

      <div className="allPostBtn">
        <button
          className={`postInspBtn ${posting && "bg-primary"} 
                      ${posting ? "text-white" : "text-textBody"}`}
          onClick={() => {
            setPosting(true);
            setResponding(false);
            setSynthesizing(false);
          }}
        >
          Posting
        </button>
        <button
          className={`postInspBtn ${responding && "bg-primary"} 
                      ${responding ? "text-white" : "text-textBody"}`}
          onClick={() => {
            setPosting(false);
            setResponding(true);
            setSynthesizing(false);
          }}
        >
          Responding
        </button>
        <button
          className={`postInspBtn ${synthesizing && "bg-primary"} 
                      ${synthesizing ? "text-white" : "text-textBody"}`}
          onClick={() => {
            setPosting(false);
            setResponding(false);
            setSynthesizing(true);
          }}
        >
          Synthesizing
        </button>
      </div>
      <div className="postInspCont">
        {posting && allPostInsp.map((ins, index) => <h4 className=" text-textBody" key={index}>{ins}</h4>)}
        {responding && RespInsp.map((ins, index) => <h4 key={index}>{ins}</h4>)}
        {synthesizing &&
          SynInsp.map((ins, index) => <h4 key={index}>{ins}</h4>)}
      </div>
    </div>
  );
}

export default ViewPostInsp;
