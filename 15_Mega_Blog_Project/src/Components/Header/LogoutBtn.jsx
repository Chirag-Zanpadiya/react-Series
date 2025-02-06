import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        // yewala logout store ke andar value ko update karne keliye use hota hai

        dispatch(logout());
      })
      .catch((error) => {
        console.log("Header :: logoutHandler :: error", error);
      });
  };
  return (
    <button
    onClick={logoutHandler} 
    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      LogOut
    </button>
  );
}

export default LogoutBtn;

// LogoutBtn.jsx ) file mein LogoutBtn component user ko logout karne ke liye ek button provide karta hai. logoutHandler function authService.logout() method ko call karta hai jo user ko logout karta hai. Agar logout successful hota hai, to dispatch(logout()) call kiya jata hai jo Redux store mein user ko logout karne ke liye use hota hai. Agar logout fail hota hai, to error ko catch karke console mein log kiya jata hai. Is tarah se aapka LogoutBtn component user ko logout karne ke liye ek centralized aur consistent approach provide karta hai.




// authService.logout() method ko call karke user ke current session ko terminate karna zaroori hai taaki user ko application se securely logout kiya ja sake. Isse ensure hota hai ki user ke credentials aur session data ko properly invalidate kiya gaya hai, aur unauthorized access ko prevent kiya gaya hai.

// Reasons to Call authService.logout():
// Security:

// User ke session ko terminate karke aap ensure karte hain ki user ke credentials aur session data ko properly invalidate kiya gaya hai.
// Isse unauthorized access ko prevent kiya jata hai.
// Session Management:

// Proper session management ke liye user ke current session ko terminate karna zaroori hai.
// Isse backend server pe user ke session ko remove kiya jata hai.
// State Consistency:

// User ko logout karne ke baad application state ko consistent rakhna zaroori hai.
// Redux store ko update karke application state ko logout state mein set kiya jata hai.