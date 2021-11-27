import React from "react";
import "../../Styling/settings/Notific.css";
function Notific({ handleClick }) {
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
        <button
          className="bg-dashBtn text-textBody"
          onClick={handleClick}
          name="security"
        >
          Security
        </button>
        <button
          className="bg-primary text-white"
          onClick={handleClick}
          name="notification"
        >
          Notifications
        </button>
        <button
          className="bg-dashBtn text-textBody"
          onClick={handleClick}
          name="plan"
        >
          Plans
        </button>
      </div>
      <div className=".notifiCont">
        <h2 className="profileHeading">Notifications</h2>
        <div className="allNotifItem">
          <div className="notifItem ">
            {/* switch */}
            <h2>Activity report</h2>
            <select name="" id="">
              <option value="daily"> daily</option>
            </select>
            <label className="switch">
              <input
                type="checkbox"
                onChange={(e) => alert(`changed ${e.target.id}`)}
                name="reports"
                id="activity"
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="notifItem">
            {/* switch */}
            <h2>@mentions</h2>
            <select name="" id="">
              <option value="daily"> daily</option>
            </select>
            <label className="switch">
              <input
                type="checkbox"
                onChange={(e) => alert(`changed ${e.target.id}`)}
                name="mentions"
                id="mentions"
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="notifItem">
            {/* switch */}
            <h2>new grade</h2>
            <select name="" id="">
              <option value="daily"> daily</option>
            </select>
            <label className="switch">
              <input
                type="checkbox"
                onChange={(e) => alert(`changed ${e.target.id}`)}
                name="grade"
                id="newGrade"
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notific;
