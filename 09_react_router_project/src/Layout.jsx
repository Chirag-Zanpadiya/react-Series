import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      {/* ye header to fix rahega  */}
      <Header />
      {/* // basically dynamic hai yaha pe chijo ko change kar sakte hai */}
      <Outlet />
      {/* ye footer to fix rahega  */}
      <Footer />

    </>
  );
}

export default Layout;
