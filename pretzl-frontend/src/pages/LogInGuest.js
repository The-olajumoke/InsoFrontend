import React, { useState } from "react";
import * as Yup from "yup";
import "../Styling/Login.css";
import "../Styling/SignUp.css";

import { MdClose } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import Button from "../components/SignUp/Button";
import Page from "../components/SignUp/Page";
import history from "../utils/history";
import axios from "axios"
var apiBaseUrl = "http://localhost:8080/api/auth/login";

function LogInGuest({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);
  const handleBack = () => {
    history.push("./sign-up");
  };
  const handleSubmit = (e) => {
    console.log(e.username);
    console.log(e.email);

    var payload = {
      username: e.email,
      password: e.username,
    };
    console.log(payload);

    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = "POST";
    axios
      .post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          console.log("Login successfull");
          //  window.Response("Login successfull - Welcome to Pretzl"+`\n`+"AccessToken : "+response.data.accessToken +'\n'+"Roles : "+response.data.roles)
          alert(
            "Login successfull - Welcome to Pretzl" +
              `\n` +
              "AccessToken : " +
              response.data.accessToken +
              "\n" +
              "Roles : " +
              response.data.roles
          );
          history.push("./discussion");
        } else if (response.status == 401) {
          console.log("Username password do not match");
          alert("Username password do not match");
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 401) {
          console.log("Username password do not match");
          alert(
            error.response.data.message +
              `\n` +
              "Username password do not match"
          );
        }
      }
     );
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
              email: "",
              username: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("invalid email address")
                .required("Required"),
              username: Yup.string()
                .min(3, "Must be at least 3 characters")
                .required("Required"),
            })}
          >
            {({ isSubmitting, isValid, isValidating, dirty }) => (
              <Form className="log-form ">
                <div className="form-cont">
                  <CustomField
                    label="Email address"
                    placeholder="Enter email..."
                    type="email"
                    name="email"
                  />
                  <CustomField
                    label="Preferred username"
                    placeholder="Enter preferred username..."
                    type="text"
                    name="username"
                  />
                </div>
                <div className="btn-holder">
                  <Button mt="mt-1" disabled={!(isValid && dirty)}>
                    Log In
                  </Button>

                  <div className="account-text">
                    <h3 className="">If you don't have an account,</h3>

                    <button
                      onClick={() => history.push("./sign-as-user")}
                      className=" text-primary"
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
    </Page>
  );
}

export default LogInGuest;
