import React from 'react'

function Security({handleClick}) {
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
      <div className="securityCont ring">
        <h2 className="profileHeading">Security</h2>

        <div className="ring ring-red">
          <div className="profileBox mb-14">
            <label htmlFor="">Current Password :</label>
            <input type="text" name="" id="" placeholder={`@Patrick`} />
          </div>

          <div className="profileBox">
            <label htmlFor="">New Password :</label>
            <input type="email" name="" id="" />
          </div>
          <div className="profileBox">
            <label htmlFor="">Confirm New Password :</label>
            <input type="email" name="" id="" />
          </div>
        </div>
      </div>
      </>
    );
}

export default Security
