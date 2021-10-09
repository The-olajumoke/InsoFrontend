import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import history from "../../utils/history";
import axios from "axios";
import PopIcon from "../../components/PopIcon";
import CustomizedSnackbars from "../../components/NotiPopUp";

const initialState = {
  user: {
    firstName: null,
    lastName: null,
    userName: null,
    phoneNumber: null,
    email: null,
    alternativeEmail: null,
    password: null,
    repeatPassword: null,
    primaryUse: null,
    profession: null,
    work: null,
    terms: false,
  },
  signedState: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.user.firstName = payload.firstName;
      state.user.lastName = payload.lastName;
      state.user.userName = payload.userName;
      state.user.phoneNumber = payload.phoneNumber;
    },
    setCurrentUsertwo: (state, { payload }) => {
      state.user.email = payload.email;
      state.user.alternativeEmail = payload.alternativeEmail;
      state.user.password = payload.password;
      state.user.repeatPassword = payload.repeatPassword;
    },
    setCurrentUserthree: (state, { payload }) => {
      console.log(payload);
      state.user.primaryUse = payload.primaryUse;
      state.user.profession = payload.profession;
      state.user.work = payload.work;
      state.user.terms = payload.terms;
    },
    setSignedTrue: (state, { payload }) => {
      console.log(state);
      console.log(payload);
      state.signedState = true;

      console.log(state.signedState);
    },
    setSignedFalse: (state, { payload }) => {
      console.log(state);
      console.log(payload);
      state.signedState = false;

      console.log(state.signedState);
    },
  },
});
export const signUpOne = (newUser) => (dispatch) => {
  dispatch(setCurrentUser(newUser));
};
export const signUpTwo = (newUser) => (dispatch) => {
  dispatch(setCurrentUsertwo(newUser));
};
export const signUpThree = (newUser) => async (dispatch, getState) => {
  dispatch(setCurrentUserthree(newUser));
  const currentState = getState();
  const userDetails = currentState.user.user;
  console.log(userDetails);
  {
    alert(JSON.stringify(userDetails, null, 2));
  }
  var payload = {
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    userName: userDetails.userName,
    phoneNumber: userDetails.phoneNumber,
    email: userDetails.email,
    password: userDetails.password,
    alternativeEmail: userDetails.alternativeEmail,
    primarilyUse: userDetails.primaryUse,
    role: ["user"],
    occupation: userDetails.profession,
    receiveInsoUpdates: userDetails.terms,
  };
  console.log(payload);
//  await dispatch(SignUpUser(payload));

  var apiBaseUrl = "http://localhost:8080/api/auth/signup";

  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.post["Access-Control-Allow-Methods"] = "POST";

  try {
    const res = await axios.post(apiBaseUrl, payload);
    console.log(res);
    console.log(res.data.message);
    console.log(res.status);
    dispatch(setSignedTrue());
  } catch (error) {
    console.log(error.res);
  }

};

// export const signUpThree =createAsyncThunk()

export const SignUpUser = (payload) => async (dispatch) => {
  console.log(payload);
  {
    alert(JSON.stringify(payload, null, 2));
  }

  // var apiBaseUrl = "http://localhost:8080/api/auth/signup";

  // axios.defaults.headers.post["Content-Type"] =
  //   "application/json;charset=utf-8";
  // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  // axios.defaults.headers.post["Access-Control-Allow-Methods"] = "POST";

  // try {
  //   const res = await axios.post(apiBaseUrl, payload);
  //   console.log(res);
  //   console.log(res.data.message);
  //   console.log(res.status);
  //   dispatch(setSignedTrue());
  // } catch (error) {
  //   console.log(error.res);
  // }
};

export const {
  setCurrentUser,
  setCurrentUsertwo,
  setCurrentUserthree,
  setSignedTrue,
  setSignedFalse,
} = userSlice.actions;
export default userSlice.reducer;

// axios.post(apiBaseUrl, payload).then(function (response) {
//   console.log(response);
//   if (response.status == 200) {
//     console.log("SignUp Successful");
//     alert("SignUp Successful" + `\n`);
//     dispatch(setSignedTrue());
//     // history.push("./log-in");
//   } else if (response.status == 401) {
//     console.log("error from payload");
//     alert("error from payload");
//     dispatch(setSignedFalse());
//   } else {
//     console.log("Unsuccessful SignUp");
//     alert("Unsuccessful SignUp");
//     dispatch(setSignedFalse());
//   }
// });
