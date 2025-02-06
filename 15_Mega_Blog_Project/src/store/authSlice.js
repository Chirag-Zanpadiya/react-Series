import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },


    // action haai pan is ki jarurat nahi hai
    logout: (state) => {
      state.status = false, 
      state.userData = null;
    },
  },
});

export  const {login , logout} = authSlice.actions

export default authSlice.reducer


// status:

// Purpose: This boolean property indicates whether the user is currently authenticated (true) or not (false).
// Usage: It can be used to conditionally render components or redirect users based on their authentication status. For example, you might show a login form if status is false and the main application if status is true.
// userData:

// Purpose: This property holds the authenticated user's data. Initially, it is set to null and will be populated with user information (such as user ID, email, name, etc.) once the user logs in.
// Usage: It can be used to display user-specific information in the UI, such as the user's name or profile picture.
// Here is an example of how these properties might be used in your Redux slice:


// Yes, exactly! The purpose of using Redux and creating slices like authSlice is to manage the state of your application in a centralized and predictable way. By storing variables and methods (actions) in the Redux store, you can easily access and update the state from any component in your application.

// Key Points
// Global State Management:

// The authSlice manages the authentication state (status and userData) globally.
// Any component can access and update this state using Redux actions and selectors.
// Actions:

// login: This action updates the state to indicate that the user is authenticated and stores the user's data.
// logout: This action resets the state to indicate that the user is not authenticated and clears the user's data.
// Reducers:

// The reducers handle the logic for updating the state based on the dispatched actions.