import React from 'react'

function Security({handleClick}) {
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
              <input type="text" name="" id="" placeholder={`@Patrick`} />
            </div>

            <div className="contactBox">
              <label htmlFor="">New Password :</label>
              <input type="email" name="" id="" />
            </div>
            <div className="contactBox">
              <label htmlFor="">Confirm New Password :</label>
              <input type="email" name="" id="" />
            </div>
          </div>
          <div className="profileBtnCont">
            <button className="profileBtn">Save Changes</button>
          </div>
        </div>
      </>
    );
}

export default Security
