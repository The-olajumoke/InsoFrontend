import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../../utils/history";
import setAuthToken from "../../utils/setAuthToken";
const initialState = {
  user: {
    firstName: null,
    lastName: null,
  },
  isLoggedIn: false,
  signedState: false,
  navSize: "small",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      console.log(payload);
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
      state.isLoggedIn = true;
    },
  },
});

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (newUser, { dispatch }) => {
    console.log(newUser);

    var apiBaseUrl = "http://localhost:8080/api/auth/signup";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = "POST";

    try {
      const res = await axios.post(apiBaseUrl, newUser);
      console.log(res);
      console.log(res.status);
      if (res.status) {
        dispatch(setSignedTrue());
      }
      console.log(res.data);
      console.log(res.data.message);
      // alert("successful");
      history.push("./discussions")
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
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=Utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    };
    try {
      const res = await axios.post(apiBaseUrl, data, axiosConfig);

      console.log(res);

      console.log(res.data);
      const token = res.data.accessToken;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      dispatch(setLoggedInUser());
      // dispatch(setCurrentUser(data))
      history.push("./discussions");
    } catch (error) {
      console.log({ ...error });
      // alert("failure");
    }
  }
);
// SETTINGS PAGE
export const editDetails = createAsyncThunk(
  "user/editUserDetails",
  async (data) => {
    var apiBaseUrl = "http://localhost:8080/api/auth/signup";

    axios.defaults.headers.put["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.put["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.put["Access-Control-Allow-Methods"] = "PUT";

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
  setSignedTrue,
  setCurrentNavSize,
  setLoggedInUser,

  // setSignedFalse,
} = userSlice.actions;
export default userSlice.reducer;
