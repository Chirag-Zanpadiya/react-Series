import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

// yaha pe ham auth ko slice banaye ge ki user authenticated hai ya nahi

const initialState = {
  // by default user authenticated nahi hai

  status: false,

  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login

    login: (state, action) => {
      // login ke bad user authenticated hai toh usko true mark kar dege
      state.status = true;

      // userData to action.payload me se lelege
      state.userData = action.payload;
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});



export const {login , logout}  = authSlice.actions
export default authSlice.reducer