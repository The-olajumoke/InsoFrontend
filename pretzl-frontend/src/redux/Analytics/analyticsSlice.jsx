import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allDiscSet: null,
  allDisc: null,
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setAllDisSet: (state, { payload }) => {
      console.log(payload);
    },
    setAllDis: (state, { payload }) => {
      console.log(payload);
    },
  },
});

export const getAllDisc = createAsyncThunk(
  "analytics/getAllDisc",
  async (_, { getState,dispatch }) => {
    {
      //  var apiBaseUrl = `http://localhost:8080/api/auth/analytics?username=${userName}`;

      
      var apiBaseUrl ="http://localhost:8080/api/auth/analytics?username=Bhaskar";

axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET";


try {
  const res = await axios.get(apiBaseUrl);
  console.log(res);
  console.log(res.status);
} catch (error) {
  console.log({...error});
  
}
    }
  }
);

export const {
  setAllDis,setAllDisSet
}=analyticsSlice.actions;
export default analyticsSlice.reducer