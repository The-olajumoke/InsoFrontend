import React, { useState } from "react";
import * as Yup from "yup";
import "../Styling/Login.css";
import { MdClose } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import Button from "../components/SignUp/Button";
import Page from "../components/SignUp/Page";
import history from "../utils/history";
import axios from "axios";
import NotiPopUp from "../components/NotiPopUp";
import CustomizedSnackbars from "../components/NotiPopUp";
import { useDispatch } from "react-redux";
import { logInUser } from "../redux/User/userSlice";
import GoogleBtn from "../components/Form/GoogleBtn";

function LogInUser({ activeModal, setactiveModal }) {
  const dispatch = useDispatch();

  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);

  const handleBack = () => {
    history.push("./");
  };
  const handleSubmit = (e) => {
    console.log(e.password);
    console.log(e.email);

    var payload = {
      username: e.email,
      password: e.password,
    };
    dispatch(logInUser(payload));
  };

  return (
    <Page>
      <SignInCont
        title="Log in"
        largeText="Say something different."
        extraText="Enter Log in details"
        setactiveModal={setactiveModal}
        backBtnFunction={handleBack}
      >
        <div className="logInUser-content ">
          <div className=" ml-0 desktopCancel">
            <div
              onClick={() => {
                history.push("./");
              }}
              className="backBtn flex cursor-pointer items-center  "
            >
              <FiArrowLeft className=" backIcon" />
              <h3>Back</h3>
            </div>
            <MdClose
              onClick={() => {
                history.push("./");
              }}
              className="text-primary cursor-pointer  h-8 w-8"
            />
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(6, "Must be at least 6 characters")
                .required("Required"),
            })}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className="log-form my-12 ">
                <div className="form-cont">
                  <CustomField
                    placeholder="Enter email..."
                    type="email"
                    name="email"
                  />
                  <CustomField
                    placeholder="Enter password..."
                    type="password"
                    name="password"
                  />
                </div>

                <div className="btn-holder">
                  <Button mt="mt-16" disabled={!(isValid && dirty)}>
                    Log In
                  </Button>
                  <GoogleBtn />

                  <div className="account-text ">
                    <h3 className="">If you don't have an account, </h3>
                    <button
                      onClick={() => history.push("./sign-up")}
                      className="text-primary"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          {/* button */}
        </div>
      </SignInCont>
      {/* <CustomizedSnackbars
        title="Account created Successfully"
        text="Log in to start a discussion."
      /> */}
    </Page>
  );
}

export default LogInUser;
