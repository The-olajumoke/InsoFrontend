import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../../utils/history";
import setAuthToken from "../../utils/setAuthToken";
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
  isAuthenticated: false,
  signedState: false,
  navSize: "small",
  // icon:"large",
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
    setSignedTrue: (state) => {
      console.log(state);
      state.signedState = true;
      console.log(state.signedState);
    },
    setCurrentNavSize: (state, { payload }) => {
      console.log("previous state is" + state.navSize);
      state.navSize = payload;
      console.log("new state is" + state.navSize);
    },
    setLoggedInUser: (state, { payload }) => {
      state.isAuthenticated = true;
    },
  },
});

export const signUpOne = (newUser, showResult) => (dispatch) => {
  dispatch(setCurrentUser(newUser));
};
export const signUpTwo = (newUser) => (dispatch) => {
  dispatch(setCurrentUsertwo(newUser));
};

export const signUpThree = createAsyncThunk(
  "user/signUpUser",
  async (newUser, { dispatch, getState }) => {
    dispatch(setCurrentUserthree(newUser));
    const currentState = getState();
    const userDetails = currentState.user.user;
    console.log(userDetails);

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
    // {
    //   alert(JSON.stringify(payload, null, 2));
    // }

    var apiBaseUrl = "http://localhost:8080/api/auth/signup";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = "POST";

    try {
      const res = await axios.post(apiBaseUrl, payload);
      console.log(res);
      console.log(res.status);
      if (res.status) {
        dispatch(setSignedTrue());
      }
      console.log(res.data);
      console.log(res.data.message);
      // alert("successful");
    } catch (error) {
      console.log({ ...error });
      // alert("failure");
    }
  }
);

export const setNavSize = (size) => (dispatch) => {
  dispatch(setCurrentNavSize(size));
};

// LOGIN USER
export const logInUser = createAsyncThunk(
  "user/logInUser",
  async (data, { dispatch }) => {
    var apiBaseUrl = "http://localhost:8080/api/auth/login";

    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = "POST";

    try {
      const res = await axios.post(apiBaseUrl, data);
      console.log(res);

      console.log(res.data);
      const token = res.data.accessToken;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      dispatch(setLoggedInUser());
      history.push("./discussion");
    } catch (error) {
      console.log({ ...error });
      alert("failure");
    }
  }
);
// SETTINGS PAGE
export const editDetails = createAsyncThunk(
  "user/editUserDetails",
  async (data) => {
    var apiBaseUrl = "http://localhost:8080/api/auth/signup";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = "PUT";

    try {
      const res = await axios.put(apiBaseUrl, data);
      console.log(res);
      console.log(res.status);
      console.log(res.data);
      console.log(res.data.message);
      alert("successful");
    } catch (error) {
      console.log({ ...error });
      alert("failure");
    }
  }
);

export const {
  setCurrentUser,
  setCurrentUsertwo,
  setCurrentUserthree,
  setSignedTrue,
  setCurrentNavSize,
  setLoggedInUser,

  // setSignedFalse,
} = userSlice.actions;
export default userSlice.reducer;
