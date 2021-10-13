import React from "react";
import "../../Styling/settings/Notific.css";
function Notific({handleClick}) {
  return (
    <>
    <div className="settingHeader">
      <button onClick={handleClick} name="profile">
        Profile
      </button>
      <button onClick={handleClick} name="security">
        Security
      </button>
      <button onClick={handleClick} name="notification">
        Notifications
      </button>
      <button onClick={handleClick} name="plan">
        Plans
      </button>
    </div>
    <div className="profileCont">
      <h2 className="profileHeading">Notifications</h2>
      <div className="notifItem">
        {/* switch */}
        <h2>Activity report</h2>
        <select name="" id="">
          <option value="daily"> daily</option>
        </select>
        <label className="switch">
          <input type="checkbox" name="reports" id="" />
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
          <input type="checkbox" name="mentions" id="" />
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
          <input type="checkbox" name="grade" id="" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
    </>
  );
}

export default Notific;
