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
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import CustomizedSnackbars from "../components/NotiPopUp";
import { useDispatch } from "react-redux";
import { logInUser } from "../redux/User/userSlice";
import GoogleBtn from "../components/Form/GoogleBtn";
import store from "../redux/store";

function LogInUser({ activeModal, setactiveModal }) {
  const dispatch = useDispatch();

 const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const handleBack = () => {
    history.push("./");
  };
  
  const handleSubmit = async (e) => {
    setLoading(true);

    var payload = {
      username: e.email,
      password: e.password,
    };
    await dispatch(logInUser(payload));
    setLoading(false);
    const currentStore = store.getState();
    const currentSignedState = currentStore.user.isLoggedIn;
    {
      currentSignedState ? setShowAlert(true) : setErrorAlert(true);
    }
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
                .min(8, "Must be at least 6 characters")
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
          {showAlert && (
            <CustomizedSnackbars
              title="Welcome to inso"
              text="Click Dashboard to create a discussion."
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
              title="Error Logging in"
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
    </Page>
  );
}

export default LogInUser;
