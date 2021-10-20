import React from "react";
import BodyWrapper from "../components/BodyWrapper";
import "../Styling/Contact.css";
import ResponsiveTop from "../components/ResponsiveTop";function Contact() {
  return (
    <BodyWrapper>
      <ResponsiveTop title="Contact Us" />
      <div className="contactMain">
        <div className="contactForWidth">
          <div className="contactCont">
            <h3>Contact Us</h3>
            <h4>
              We’re happy to answer any questions or requests you may have about
              Pretzl.
            </h4>
          </div>
          <div className=" contactBoxCont ">
            <div className="contactBox ">
              <label htmlFor="">Username :</label>
              <input
                type="text"
                name="username"
                id=""
                placeholder="Input  your name"
              />
            </div>
            <div className="contactBox">
              <label htmlFor="">First Name :</label>
              <input
                type="text"
                name="firstname"
                id=""
                placeholder="Input email address"
              />
            </div>
            <div className="contactBoxText">
              <label htmlFor="">Message :</label>
              <textarea
                name="message"
                placeholder="What would you like to tell?"
              ></textarea>
            </div>
            <div className="contactBtnCont">
              <button className="contactBtn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default Contact;
