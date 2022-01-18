import React, { useState } from "react";
import * as Yup from "yup";
import "../Styling/Login.css";
import "../Styling/SignUp.css";
import { CgSpinner } from "react-icons/cg";

import { MdClose } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import Button from "../components/SignUp/Button";
import Page from "../components/SignUp/Page";
import history from "../utils/history";
import { useDispatch } from "react-redux";
import GoogleBtn from "../components/Form/GoogleBtn";
import { logInGuest } from "../redux/User/userSlice";

function LogInGuest({ activeModal, setactiveModal }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    history.push("./sign-up");
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    console.log(e.email);
    console.log(e.password);

    var payload = {
      email: e.email,
      firstName: e.firstName,
      lastName: e.lastName,
    };
    console.log(payload);

    await dispatch(logInGuest(payload));
    setLoading(false);
  };
  return (
    <Page>
      <SignInCont
        title="Log In"
        largeText="Welcome to Inso."
        extraText="Create an account to gain full access to our features."
        setactiveModal={setactiveModal}
        backBtnFunction={handleBack}
      >
        <div className="logInUser-content">
          <div className="flex  justify-between mb-8 ml-0 desktopCancel">
            <div
              onClick={() => {
                history.push("/sign-up");
              }}
              className="backBtn flex cursor-pointer items-center"
            >
              <FiArrowLeft className="backIcon" />
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
              firstName: "",
              lastName: "",
              email: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("invalid email address")
                .required("Required"),
              firstName: Yup.string()
                .min(3, "Must be at least 3 characters")
                .required("Required"),
              lastName: Yup.string()
                .min(3, "Must be at least 3 characters")
                .required("Required"),
            })}
          >
            {({ isSubmitting, isValid, isValidating, dirty }) => (
              <Form className="log-form">
                <div className="form-cont ">
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
                    placeholder="Enter email..."
                    type="email"
                    name="email"
                  />
                </div>
                <div className="btn-holder">
                  <Button mt="mt-1" disabled={!(isValid && dirty)}>
                    {loading ? (
                      <h2 className="flex items-center">
                        <CgSpinner className="animate-spin    mr-1" />{" "}
                        Loading...
                      </h2>
                    ) : (
                      " Log In"
                    )}
                  </Button>
                  <GoogleBtn />

                  <div className="account-text">
                    <h3 className="">If you don't have an account,</h3>

                    <button
                      onClick={() => history.push("./sign-as-user")}
                      className=" text-primary"
                    >
                      Sign up
                    </button>
                  </div>
                  <h5 className=" continuePolicy">
                    <span> By continuing you agree to our</span>
                    <span>Terms & Conditions and Privacy Policy.</span>{" "}
                  </h5>
                </div>
              </Form>
            )}
          </Formik>
          {/* button */}
        </div>
      </SignInCont>
    </Page>
  );
}

export default LogInGuest;
