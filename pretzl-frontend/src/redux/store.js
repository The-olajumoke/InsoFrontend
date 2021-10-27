import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import analyticsReducer from "./Analytics/analyticsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    analytics: analyticsReducer,
  },
});

export default store;
