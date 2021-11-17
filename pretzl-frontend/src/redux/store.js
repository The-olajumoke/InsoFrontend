import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import analyticsReducer from "./Analytics/analyticsSlice";
import discReducer from "./Discussion/disSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    analytics: analyticsReducer,
    disc: discReducer,
  },
});

export default store;
