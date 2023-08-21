import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import jobSlice from "./Slices/jobSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    job: jobSlice,
  },
});
