import { combineReducers } from "@reduxjs/toolkit";
import customizationSlice from "./customizationSlice";
import userSlice from "./userSlice";


export default combineReducers({
    user: userSlice.reducer,
    customization: customizationSlice.reducer,
})