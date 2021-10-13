import React from "react";
import { FiAward } from "react-icons/fi";
import "../../Styling/settings/profile.css";
import img from "../../Exports/Avatar.svg"
function Profile({handleClick}) {
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
    <div className="profileCont ring">
      <h2 className="profileHeading">Profile</h2>
      <div className="pictureCont">
        <img src={img} alt="" />
        <div>
          <h3>Patrick Dempsey</h3>
          <h5>@patrick</h5>
        </div>
      </div>

      <div className="ring ring-red">
        <div className="profileBox">
          <label htmlFor="">Username :</label>
          <input type="text" name="" id="" placeholder={`@Patrick`} />
        </div>
        <div className="profileBox">
          <label htmlFor="">First Name :</label>
          <input type="text" name="" id="" />
        </div>
        <div className="profileBox">
          <label htmlFor="">Last Name :</label>
          <input type="text" name="" id="" />
        </div>
        <div className="profileBox">
          <label htmlFor="">Email :</label>
          <input type="email" name="" id="" />
        </div>
        <div className="profileBox">
          <label htmlFor="">Alternative Mail :</label>
          <input type="email" name="" id="" />
        </div>
      </div>
      <div className="ring profileBtnCont">
        <button className="profileBtn">Save Changes</button>
      </div>
      <button className="logoutBtn">
        <FiAward />
        Sign Out
      </button>
    </div>
    </>
  );
}

export default Profile;
