import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newDiscusssion: [],
};

const disSlice = createSlice({
  name: "disc",
  initialState,
  reducers: {
    SetCreateDisc: (state, { payload }) => {
      state.newDiscusssion = [...state.newDiscusssion, payload];
    },
    StopDisc: (state, { payload }) => {
      state.newDiscusssion = [];
    },
    
  },
});

export const createDisc = (data) => (dispatch) => {
  dispatch(SetCreateDisc(data));
};

export const endDisc = () => (dispatch) => {
  dispatch(StopDisc());
};

export const { SetCreateDisc,StopDisc } = disSlice.actions;
export default disSlice.reducer;
