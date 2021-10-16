import React, { useState } from "react";
import { FiAward, FiLogOut } from "react-icons/fi";
import "../../Styling/settings/profile.css";
import img from "../../Exports/Avatar.svg";
function Profile({ handleClick }) {
  const [inputField, setInputField] = useState({
    username: "",
    firstname: "",
    // lastname: "",
    email: "",
    // alternativeemail: "",
  });
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setInputField({ [e.target.name]: e.target.value });
  };
  const handlesubmit = () => {
    const newUser = {
      userName: inputField.username,
      // firstName: inputField.firstname,
      // lastname: inputField.lastname,
      email: inputField.email,
      // alternativeemail: inputField.alternativeemail,
    };
    {
      alert(JSON.stringify(newUser, null, 2));
    }
  };
  return (
    <>
      <div className="settingHeader">
        <button
          className="bg-primary text-white"
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
          className="bg-dashBtn text-textBody"
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
      <div className="profileCont">
        <h2 className="profileHeading">Profile</h2>
        <div className="pictureCont">
          <img src={img} alt="" />
          <div>
            <h3>Patrick Dempsey</h3>
            <h5>@patrick</h5>
          </div>
        </div>

        <div className=" profileBoxCont">
          <div className="profileBox ">
            <label htmlFor="">Username :</label>
            <input
              type="text"
              onChange={handleChange}
              name="username"
              id=""
              placeholder={`@Patrick`}
            />
          </div>
          <div className="profileBox">
            <label htmlFor="">First Name :</label>
            <input type="text" onChange={handleChange} name="firstname" id="" />
          </div>
          <div className="profileBox">
            <label htmlFor="">Last Name :</label>
            <input type="text" onChange={handleChange} name="lastname" id="" />
          </div>
          <div className="profileBox">
            <label htmlFor="">Email :</label>
            <input type="email" onChange={handleChange} name="email" id="" />
          </div>
          <div className="profileBox">
            <label htmlFor="">Alternative Mail :</label>
            <input
              type="email"
              name="alternativeemail"
              onChange={handleChange}
              id=""
            />
          </div>
          <div className="profileBtnCont">
            <button onClick={handlesubmit} className="profileBtn">
              Save Changes
            </button>
          </div>
        </div>

        <button className="logoutBtn">
          <FiLogOut className="logIcon" />
          Sign Out
        </button>
      </div>
    </>
  );
}

export default Profile;
