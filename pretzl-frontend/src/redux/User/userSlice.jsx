import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


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
  navSize:"large",
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
    // setSignedFalse: (state, { payload }) => {
    //   console.log(state);
    //   console.log(payload);
    //   state.signedState = false;

    //   console.log(state.signedState);
    // },
    setCurrentNavSize:(state,{payload})=>{
      console.log("previous state is" + state.navSize)
      state.navSize=payload
      console.log("new state is" + state.navSize);
    }
  },
});
export const signUpOne = (newUser, showResult) => (dispatch) => {
  dispatch(setCurrentUser(newUser));
};
export const signUpTwo = (newUser) => (dispatch) => {
  dispatch(setCurrentUsertwo(newUser));
};





export const signUpThree = createAsyncThunk(
  "user/signUpUser", async (newUser, { dispatch,getState }) => {
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
    {
      alert(JSON.stringify(payload, null, 2));
    }

    var apiBaseUrl = "http://localhost:8080/api/auth/signup";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = "POST";

    try {
      const res = await axios.post(apiBaseUrl, payload);
      console.log(res);
      console.log(res.status);
      if(res.status){
      dispatch(setSignedTrue());
      }
      console.log(res.data);
      console.log(res.data.message);
      alert("successful")
    } catch (error) {
      console.log({ ...error });
      alert("failure"); 
    }
  }
);
// export const signUpThree = (newUser) => (dispatch, getState) => {
//   dispatch(setCurrentUserthree(newUser));
//   const currentState = getState();
//   const userDetails = currentState.user.user;
//   console.log(userDetails);
//   {
//     alert(JSON.stringify(userDetails, null, 2));
//   }
//   var payload = {
//     firstName: userDetails.firstName,
//     lastName: userDetails.lastName,
//     userName: userDetails.userName,
//     phoneNumber: userDetails.phoneNumber,
//     email: userDetails.email,
//     password: userDetails.password,
//     alternativeEmail: userDetails.alternativeEmail,
//     primarilyUse: userDetails.primaryUse,
//     role: ["user"],
//     occupation: userDetails.profession,
//     receiveInsoUpdates: userDetails.terms,
//   };
//   console.log(payload);
//   dispatch(SignUpUser(payload));
// };
// export const SignUpUser = (payload) => (dispatch) => {
//   console.log(payload);
//   // var apiBaseUrl = "http://localhost:8080/api/auth/signup";

//   axios.defaults.headers.post["Content-Type"] =
//     "application/json;charset=utf-8";
//   axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
//   axios.defaults.headers.post["Access-Control-Allow-Methods"] = "POST";

//   axios.post(apiBaseUrl, payload).then(function (response) {
//     console.log(response);
//     if (response.status == 200) {
//       console.log("SignUp Successful");
//       alert("SignUp Successful" + `\n`);
//       dispatch(setSignedTrue());
//       history.push("./log-in");
//     } else if (response.status == 401) {
//       console.log("error from payload");
//       alert("error from payload");
//       dispatch(setSignedFalse());
//     } else {
//       console.log("Unsuccessful SignUp");
//       alert("Unsuccessful SignUp");
//       dispatch(setSignedFalse());
//     }
//   });

//   // try {
//   //   const res = await axios.post(apiBaseUrl,payload)
//   //   console.log(res);
//   //   console.log(res.status);
//   // } catch (error) {
//   //   console.log(error.res);
//   // }
// };

export const setNavSize=(size)=>(dispatch)=>{
  dispatch(setCurrentNavSize(size));
}
export const {
  setCurrentUser,
  setCurrentUsertwo,
  setCurrentUserthree,
  setSignedTrue,
  setCurrentNavSize,

  // setSignedFalse,
} = userSlice.actions;
export default userSlice.reducer;
