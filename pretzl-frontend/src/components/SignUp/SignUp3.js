import React, { useState } from "react";
import "../../Styling/SignUp.css";
import { FiArrowLeft } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import SignInCont from "../SignInCont";
import InputCheckbox from "../Form/InputCheckbox";
import { useDispatch } from "react-redux";
import Dropdown from "../Form/Dropdown";
import Button from "./Button";
import history from "../../utils/history";
import store from "../../redux/store";
import { signUpThree } from "../../redux/User/userSlice";
import { BiCheckCircle,BiErrorCircle } from "react-icons/bi";

import CustomizedSnackbars from "../NotiPopUp";

function SignUp3({ activeModal, setactiveModal }) {
  // DISPLAY SUCCESS MESSAGE
  console.log(store);

  const [guest, setGuest] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(true);
  const [check, setCheck] = useState(false);
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  const [terms, setTerms] = useState(true);
  const [allSelected, setallSelected] = useState(false);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false)

  const handleBack = () => {
    setactiveModal("signUp2");
  };

  const handleValidity = (terms) => {
    {
      (selected !== "" && selected2 !== "" && selected3 !== ""
        ? true
        : false) && terms == true
        ? setCheckDisabled((checkDisabled) => !checkDisabled)
        : console.log("still needs validation");
    }
    console.log(`terms is ${terms}`);
  };

  const  handleSubmit =async () => {
    const newUser = {
      primaryUse: selected,
      profession: selected2,
      work: selected3,
      terms: "true",
    };
    console.log(newUser);
    // THIS IS THE DISPATCH ACTION
    await dispatch(signUpThree(newUser));

    // THIS IS ACTION THAT SHOULD HAPPEN AFTER GETTING THE API RESPONSE
    const currentStore = store.getState();
    console.log(currentStore);
    const currentSignedState = currentStore.user.signedState;
    console.log(currentSignedState);

    {
      currentSignedState ? setShowAlert(true) : setErrorAlert(true);
    }
    setSelected("");
    setSelected2("");
    setSelected3("");
    setCheckDisabled(false);
  };
  const handleCheckbox = () => {
    setTerms(!terms);
    handleValidity(terms);
  };
  return (
    <SignInCont
      title="Sign Up"
      largeText="Final Questions"
      extraText=""
      setactiveModal={setactiveModal}
      backBtnFunction={handleBack}
    >
      <div className="signUp-content">
        <div className="desktopCancel ml-0 ">
          <div
            onClick={() => setactiveModal("signUp2")}
            className="backBtn items-center flex cursor-pointer  "
          >
            <FiArrowLeft className=" backIcon" />
            <h3>Back</h3>
          </div>

          <MdClose
            onClick={() => {
              history.push("./");
            }}
            className="hidden lg:flex text-primary cursor-pointer  h-8 w-8"
          />
        </div>

        <div className="sign-form3">
          <div className="frame-3">
            <Dropdown
              name="primaryUse"
              handleValidity={handleValidity}
              label="I plan to primarily use Inso for:"
              selected={selected}
              setSelected={setSelected}
              initial="Select One"
              options={["Education", "Presentations", "Team work", "Other"]}
              isActive1={isActive1}
              setIsActive1={setIsActive1}
              setIsActive2={setIsActive2}
              setIsActive3={setIsActive3}
              initial="Select one"
            />
            <Dropdown
              name="user"
              handleValidity={handleValidity}
              label="I am a:"
              selected={selected2}
              setSelected={setSelected2}
              initial="Select one"
              options={[
                "Student",
                "Teacher",
                "Instructional Designer/Technologist",
                "Presenter",
                "Director/Administrator",
                "Manager",
                "Team Member",
                "Other",
              ]}
              isActive1={isActive2}
              setIsActive1={setIsActive2}
              setIsActive2={setIsActive1}
              setIsActive3={setIsActive3}
            />
            <Dropdown
              name="work"
              handleValidity={handleValidity}
              label="I work in:"
              selected={selected3}
              setSelected={setSelected3}
              initial="Where do you work"
              options={[
                "Elementary Education (K-6)",
                "Secondary Education (7-12)",
                "Higher Education",
                "Government",
                "Non-profit",
                "Other",
              ]}
              isActive1={isActive3}
              setIsActive1={setIsActive3}
              setIsActive2={setIsActive2}
              setIsActive3={setIsActive1}
            />
          </div>

          <div className="other-part">
            <div className="checkboxCont">
              <InputCheckbox onClick={handleCheckbox} name=" acceptedTerms">
                I agree to <a href="">terms & conditions</a>
              </InputCheckbox>
              {/* <FormErrorMessage name="acceptedTerms" />  */}

              <InputCheckbox name="recieveInfo">
                I agree to receive Inso news and updates
              </InputCheckbox>
            </div>
            <div className="">
              <Button mt="mt-8" onClick={handleSubmit} disabled={checkDisabled}>
                Continue
              </Button>
            </div>
          </div>
        </div>
        {showAlert && (
          <CustomizedSnackbars
            title="Account created Successfully"
            text="Log in to start a discussion."
            severity="success"
            icon={<BiCheckCircle/>}
          />
        )}
        {errorAlert && (
          <CustomizedSnackbars
            title="Error Creating Account"
            text="Please try again"
            severity="error"
            icon={<BiErrorCircle />}
          />
        )}
      </div>
    </SignInCont>
  );
}
export default SignUp3;
