import React from "react";
import "../../Styling/settings/plan.css";
function Plan({ handleClick }) {
  return (
    <>
      <div className="settingHeader">
        <button
          className="bg-dashBtn text-textBody"
          onClick={handleClick}
          name="profile"
        >
          Profile
        </button>
        <button className="bg-dashBtn text-textBody" onClick={handleClick} name="security">
          Security
        </button>
        <button
          className="bg-dashBtn text-textBody"
          onClick={handleClick}
          name="notification"
        >
          Notifications
        </button>
        <button className=" bg-primary text-white" onClick={handleClick} name="plan">
          Plans
        </button>
      </div>
      <div className="profileCont">
        <h2 className="profileHeading">Plans</h2>
        <div className="cardHolder">
          <div className="card">
            <h2>Free</h2>
            <h3>$0 per month</h3>
            <ul>
              <li>No Credit card required</li>
              <li>This plan will always be available</li>
            </ul>
            <div className="btn">Get Inso for free</div>
          </div>
          {/* SECOND CARD */}
          <div className="card">
            <h2>Enterprise</h2>
            <h3>Coming soon</h3>
            <ul>
              <li>No Credit card required</li>
            </ul>
            <div className="btn">Talk to us on Inso</div>
          </div>
        </div>

        <div className="underInfo">
          <bold>Time-limited offer: </bold>  Any discussion that you create now
          will stay free for you forever.
        </div>
      </div>
    </>
  );
}

export default Plan;
