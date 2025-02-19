import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { useState, useEffect } from "react";
import "./App.css";
import { login, logout } from "./store/authSlice";
import { Footer ,Header } from "./Components";
import { Outlet } from "react-router-dom";
import './index.css'
function App() {
  // jo hamane project vite se create kiya hai toh vite ke hi env create karne padege

  //  TODO: loading state jab bhi hame data fetch karna hota hai toh hame loading state ka use karna chahiye
  const [loading, setLoading] = useState(true);
  // by default loading true hi hoga kyuki jo loading true hoga toh hame loading wala iconq dikhana chahiye
  // loading false hoga data dekhne ke liye

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {

          // yaha pe ek fayada hai ki jab ki userData nahi mila toh hame logout kar dena chahiye
          // state jo jame authslice create kiya waha toh false rahega 
          // yaha pe logout karne se state false ho jayega
          //redux-tool web wala usme dekhe
          dispatch(logout());
        }
      })
      .finally(()=>{setLoading(false)});
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-blue-400" >
      <div className="w-full block" >
        <Header/>

        <main>
        TODO: {/* <Outlet/> */}
        </main>

        <Footer/>

      </div>
    </div>
  ) : (null) 
}

export default App;
