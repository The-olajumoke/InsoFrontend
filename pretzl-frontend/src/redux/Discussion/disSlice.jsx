import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  createState: false,
  discussions:[],
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
    SaveDiscussions:(state,{payload})=>{
      state.discussions=payload;
      console.log(state.discussions);
    }
  },
});

export const createDisc = createAsyncThunk(
  "disc/createDis",
  async (disc, { dispatch }) => {
    console.log(disc)
     {
     alert(JSON.stringify(disc, null, 2));
     }

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
export const editDisc = createAsyncThunk(
  "disc/createDis",
  async (disc, { dispatch }) => {
    console.log(disc)
     {
     alert(JSON.stringify(disc, null, 2));
     }

    var apiBaseUrl="http://localhost:8080/api/auth/edit/discussions";

    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = "POST";

    try {
      const res = await axios.post(apiBaseUrl, disc);
      console.log(res);
      console.log(res.status);
    } catch (error) {
      console.log({ ...error });

    }
  }
);

export const endDisc = () => (dispatch) => {
  dispatch(StopDisc());
};
export const saveDisc = (disc) => (dispatch) => {
  dispatch(SaveDiscussions(disc));
};

export const { SetCreateState, StopDisc,SaveDiscussions } = disSlice.actions;
export default disSlice.reducer;
