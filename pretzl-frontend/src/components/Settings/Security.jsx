import React, { useState } from "react";

function Security({ handleClick }) {
  const [currentPassword, setcurrentPassword] = useState();
  const [newPassword, setnewPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const editDetails = {
      newPassword,
    };
    {
      alert(JSON.stringify(editDetails, null, 2));
    }
  };
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
          className="bg-primary text-white"
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
        <h2 className="profileHeading">Security</h2>

        <div className="profileBoxCont">
          <div className="contactBox mb-14">
            <label htmlFor="">Current Password :</label>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setcurrentPassword(e.target.value);
              }}
              placeholder={`@Patrick`}
            />
          </div>

          <div className="contactBox">
            <label htmlFor="">New Password :</label>
            <input
              type="email"
              name=""
              id=""
              onChange={(e) => {
                setnewPassword(e.target.value);
              }}
            />
          </div>
          <div className="contactBox">
            <label htmlFor="">Confirm New Password :</label>
            <input
              type="email"
              name=""
              id=""
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="profileBtnCont">
          <button className="profileBtn" onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

export default Security;
