import React from "react";

function EngTemplate({ set, sub, users, posts, word, instructor }) {
  return (
    <div className="TopDisFlex">
      {/* discusSet */}
      <div className="tempItem subTopic"><h2 className="">{set}</h2>
        <h4>{sub}</h4>
      </div>
      <div className="tempItem engcount engText">{users}</div>
      <div className="tempItem engcount engText">{posts}</div>
      <div className="tempItem engcount engText">{word}</div>
      <div className="tempItem engcount engText">{instructor}</div>
    </div>
  );
}

export default EngTemplate;
