import React from "react";

// appwrite me service me se authservice ka logout
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogOutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    // authservice me se curruser ka sesstion remover kar dege
    authService
      .logout()
      // store ko dispatch karana padega ki curr user lotout hai
      .then(() => {
        // TODO:
        //UI Inconsistency:
        // User interface aise elements dikhata rahega jo logged-in state ke hisaab se bane hue hain (jaise profile info, logout button, etc.), jabki backend me session remove ho chuka hai.
        // Protected routes aur content accessible reh sakte hain kyunki state me user ko abhi bhi logged in maana ja raha hoga.

        dispatch(logout());
      });
  };
  return (
    <>
      <button
        onClick={logoutHandler}
        type="button"
        className=" hover:cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Logout
      </button>
    </>
  );
}

export default LogOutBtn;
