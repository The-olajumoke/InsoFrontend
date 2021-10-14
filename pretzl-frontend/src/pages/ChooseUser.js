import React from "react";
import "../Styling/ChooseUser.css";
import firstIcon from "../Exports/firstIcon.svg";
import secondIcon from "../Exports/secondIcon.svg";
import { MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
import Page from "../components/SignUp/Page";
import history from "../utils/history";

function ChooseUser({ setactiveModal }) {

  const handleBack = () => {
    history.push("./");
  };

  return (
    <Page>
      <SignInCont
        title="Sign Up"
        largeText="How would you like to log in?"
        setactiveModal={setactiveModal}
        width="w-1/2"
        backBtnFunction={handleBack}
      >
        <div className="main-content">
          <div className="desktopCancel2 ">
            <MdClose
              onClick={() => {
                history.push("./");
              }}
              className="hidden lg:flex text-primary cursor-pointer  h-8 w-8"
            />
          </div>
          <h3 className=" section-title ">Join Discussion!</h3>

          <div className="btn-Cont">
            {/* BUTTON*/}
            {/* USER */}
            <button
              // onClick={handleChooseUser}
              onClick={() => {
                history.push("/sign-as-user");
              }}
              id="user"
              className="chooseBtn bg-inputField"
            >
              <div className="  flex justify-center">
                <img src={firstIcon} alt="currentIcon" className="img" />
              </div>
              <div className=" btn-textCont">
                <h3 className="btn-mainText text-textBody">As User</h3>
                <h5 className=" btn-subText text-desc">
                  Create an account to begin. Log in if you have one already.
                </h5>
              </div>

              <div className=" flex justify-center">
                <FiArrowRight className="icon text-primary items-center" />
              </div>
            </button>
            {/* GUESt */}

            <button
              onClick={() => {
                history.push("/sign-as-guest");
              }}
              id="guest"
              className="chooseBtn bg-inputField"
            >
              <div className="flex justify-center">
                <img src={secondIcon} alt="currentIcon" className="img" />
              </div>
              <div className=" btn-textCont ">
                <h3 className="btn-mainText text-textBody">As Guest</h3>
                <h5 className=" btn-subText text-desc">
                  Join Discussion and create account later.
                </h5>
              </div>

              <div className=" flex justify-center">
                <FiArrowRight className="icon text-border items-center" />
              </div>
            </button>
          </div>
        </div>
      </SignInCont>
    </Page>
  );
}
export default ChooseUser;
