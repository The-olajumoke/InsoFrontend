import React, { useState } from "react";
import * as Yup from "yup";

import { MdClose } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";

import SignInCont from "../../components/SignInCont";
import "../../Styling/SignUp.css";
import "../../Styling/Login.css";
import { Form, Formik } from "formik";
import CustomField from "../../components/Form/CustomInput";
import Button from "../../components/SignUp/Button";

import history from "../../utils/history";
import axios from "axios";
import { signUpUser } from "../../redux/User/userSlice";
import { useDispatch } from "react-redux";
import GoogleBtn from "../Form/GoogleBtn";
import CustomizedSnackbars from "../NotiPopUp";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";

import store from "../../redux/store";

function SignUp1({ activeModal, setactiveModal }) {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  
  const handleSubmit = async (values, { resetForm }) => {
    const newUser = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    await dispatch(signUpUser(newUser));
    const currentStore = store.getState();
    const currentSignedState = currentStore.user.signedState;
    console.log(currentSignedState);

    {
      currentSignedState ? setShowAlert(true) : setErrorAlert(true);
    }
  };
  const handleGoogleSignUp = () => {};

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Required"),
    email: Yup.string().email("invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
  });
  const handleBack = () => {
    history.push("./sign-up");
  };

  return (
    <SignInCont
      title="Sign Up"
      largeText="Say something different."
      extraText="Create an account to gain full access to our features."
      setactiveModal={setactiveModal}
      previousModal="chooseUser"
      backBtnFunction={handleBack}
    >
      <div className="signUp-content">
        <div className="desktopCancel ml-0">
          <div
            onClick={() => {
              history.push("./sign-up");
            }}
            className="backBtn flex items-center"
          >
            <FiArrowLeft className="backIcon cursor-pointer" />
            <h3>Back</h3>
          </div>

          <MdClose
            onClick={() => {
              history.push("./");
            }}
            className=" cursor-pointer h-8 w-8"
          />
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          isValid={false}
        >
          {({ isSubmitting, isValid, isValidating, dirty }) => (
            <Form className="sign-form ">
              <div className="frame">
                <CustomField
                  name="firstName"
                  type="text "
                  placeholder="First name"
                />
                <CustomField
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                />
                <CustomField
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <CustomField
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
              </div>

              <div className="btn-holder">
                <Button mt="mt-2" disabled={!(isValid && dirty)}>
                  Sign up
                </Button>
                <GoogleBtn handleClick={handleGoogleSignUp} />

                <div className=" account-text">
                  <h3 className="">Already have an account?</h3>
                  <button onClick={() => history.push("./log-in")}>
                    Log in
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        {/* button */}
        {showAlert && (
          <CustomizedSnackbars
            title="Account created Successfully"
            text="Log in to start a discussion."
            severity="success"
            icon={
              <BiCheckCircle
                fontSize="30px"
                color="#04BE00"
                severity="success"
              />
            }
          />
        )}

        {errorAlert && (
          <CustomizedSnackbars
            title="Error Creating Account"
            text="Please try again"
            severity="error"
            icon={
              <BiErrorCircle
                fontSize="30px"
                color=" #E84949"
                severity="error"
              />
            }
          />
        )}
      </div>
    </SignInCont>
  );
}
export default SignUp1;
