import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allDiscSet: [],
  allDisc: [],
  userInfo: [],
  userCount: [],
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setAllDisSet: (state, { payload }) => {
      // console.log(payload);
      state.allDiscSet = payload;
    },
    setAllDis: (state, { payload }) => {
      // console.log(payload);
      state.allDisc = payload;
    },
    setUserInfo: (state, { payload }) => {
      // console.log(payload);
      state.userInfo = payload;
    },
    setUserCount: (state, { payload }) => {
      state.userCount = payload;
    },
  },
});

export const getAllDisc = createAsyncThunk(
  "analytics/getAllDisc",
  async (_, { getState, dispatch }) => {
      var apiBaseUrl =
        "http://localhost:8080/api/auth/discussion/discussions?username=Bhaskar";
      axios.defaults.headers.get["Content-Type"] =
        "application/json;charset=utf-8";
      axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
      axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";

      try {
        const res = await axios.get(apiBaseUrl);
        const data = res.data;
        dispatch(setAllDis(data));
      } catch (error) {
        console.log({ ...error });
      }
  }
);
export const getDiscSet = createAsyncThunk(
  "analytics/getDisSet",
  async (_, { getState, dispatch }) => {
    var apiBaseUrl =
      "http://localhost:8080/api/auth/discussion/set?username=Bhaskar";

    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";

    try {
      const res = await axios.get(apiBaseUrl);
      const data = res.data;
      dispatch(setAllDisSet(data));
      return data;
    } catch (error) {
      console.log({ ...error });
    }
  }
);
export const getUsers = createAsyncThunk(
  "analytics/getAllUsers",
  async (_, { getState, dispatch }) => {
    var apiBaseUrl =
      "http://localhost:8080/api/auth/discussion/users?username=Bhaskar";

    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";

    try {
      const res = await axios.get(apiBaseUrl);
      const data = res.data;
      dispatch(setUserInfo(data));
    } catch (error) {
        console.log({ ...error });

    }
  }
);
export const getAllCount = createAsyncThunk(
  "analytics/getCounts",
  async (_, { dispatch }) => {
    var apiBaseUrl =
      "http://localhost:8080/api/auth/analytics?username=Bhaskar";

    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";

    try {
      const res = await axios.get(apiBaseUrl);
      const data = res.data;
      dispatch(setUserCount(data));
    } catch (error) {
        console.log({ ...error });

    }
  }
);


//)
export const { setAllDis, setAllDisSet, setUserInfo, setUserCount } =
  analyticsSlice.actions;
export default analyticsSlice.reducer;

////////// APIs:

// Counts API:
//  "http://localhost:8080/api/auth/analytics?username=Bhaskar"

// users API:
// http://localhost:8080/api/auth/discussion/users?username=Bhaskar

// discussion Set API:
// http://localhost:8080/api/auth/discussion/set?username=Bhaskar

// discussions API:
// GET -> http://localhost:8080/api/auth/discussion/discussions?username=Bhaskar
