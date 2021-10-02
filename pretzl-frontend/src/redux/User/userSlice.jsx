import { createSlice } from "@reduxjs/toolkit";
// import { history } from "../../utils";
import axios from "axios";

const initialState = {
  user: {
    id: null,
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
    roles: [],
  },
  isAuthenticated: false,
  signedUp: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      console.log(payload);
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.userName = payload.lastName;
      state.phoneNumber = payload.phoneNumber;
    },
    setCurrentUsertwo: (state, { payload }) => {
      console.log(payload);
      state.email = payload.email;
      state.alternativeEmail = payload.alternativeEmail;
      state.password = payload.password;
      state.repeatPassword = payload.repeatPassword;
    },
    setCurrentUserthree: (state, { payload }) => {
      console.log(payload);
      console.log(state);
      state.primaryUse = payload.primaryUse;
      state.profession = payload.profession;
      state.work = payload.work;
      state.terms = payload.terms;
      // alert(state.user);
    },
  },
});
export const signUpOne = (newUser) => (dispatch) => {
  // console.log(newUser);
  dispatch(setCurrentUser(newUser));
};
export const signUpTwo = (newUser) => (dispatch) => {
  console.log(newUser);
  dispatch(setCurrentUsertwo(newUser));
};
export const signUpThree = (newUser) => (dispatch) => {
  console.log(newUser);
  dispatch(setCurrentUserthree(newUser));
};
export const {
  setCurrentUser,
  setCurrentUsertwo,
  setCurrentUserthree,
} = userSlice.actions;
export default userSlice.reducer;
