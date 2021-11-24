import React, { useState } from "react";
import { FiAward, FiLogOut } from "react-icons/fi";
import img from "../../Exports/Avatar.svg";
import "../../Styling/settings/profile.css";
import "../../Styling/Contact.css";
import { useDispatch } from "react-redux";
import { editDetails } from "../../redux/User/userSlice";
function Profile({ handleClick }) {
  const dispatch = useDispatch();
  const [username, setusername] = useState("patrick");
  const [firstname, setfirstname] = useState("collins");
  const [lastname, setlastname] = useState("Beth");
  const [email, setemail] = useState("olajumokegoodluck@gmail.com");
  const [alternativeemail, setalternativeemail] = useState("patrickDempsey@gmail.com");

  const handlesubmit = (e) => {
    e.preventDefault();
    const editDetails = {
      username,
      firstname,
      lastname,
      email,
      alternativeemail,
    };
    {
      alert(JSON.stringify(editDetails, null, 2));
    }

    // dispatch(editDetails(editDetails))
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
          <div className="contactBox ">
            <label htmlFor="">Username :</label>
            <input
              type="text"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              name="username"
              id=""
              // value={username}
              placeholder={`@Patrick`}
            />
          </div>
          <div className="contactBox">
            <label htmlFor="">First Name :</label>
            <input
              type="text"
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
              // value={firstname}
              name="firstname"
              id=""
            />
          </div>
          <div className="contactBox">
            <label htmlFor="">Last Name :</label>
            <input
              type="text"
              onChange={(e) => {
                setlastname(e.target.value);
              }}
              // value={lastname}
              name="lastname"
              id=""
            />
          </div>
          <div className="contactBox">
            <label htmlFor="">Email :</label>
            <input
              type="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              // value={email}
              name="email"
              id=""
            />
          </div>
          <div className="contactBox">
            <label htmlFor="">Alternative Mail :</label>
            <input
              type="email"
              name="alternativeemail"
              onChange={(e) => {
                setalternativeemail(e.target.value);
              }}
              // value={alternativeemail}
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
