import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  createState: false,
};

const disSlice = createSlice({
  name: "disc",
  initialState,
  reducers: {
    SetCreateState: (state, { payload }) => {
      state.createState = true;
    },
    StopDisc: (state, { payload }) => {
      state.newDiscusssion = [];
    },
  },
});

export const createDisc = createAsyncThunk(
  "disc/createDis",
  async (disc, { dispatch }) => {
    
    var apiBaseUrl = "http://localhost:8080/api/auth/create/discussions";

    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = "POST";

    try {
      const res = await axios.post(apiBaseUrl, disc);
      console.log(res);
      console.log(res.status);
      if (res.status) {
     dispatch(SetCreateState())
      }
    } catch (error) {
      console.log({ ...error });

    }
  }
);

export const endDisc = () => (dispatch) => {
  dispatch(StopDisc());
};

export const { SetCreateState, StopDisc } = disSlice.actions;
export default disSlice.reducer;
