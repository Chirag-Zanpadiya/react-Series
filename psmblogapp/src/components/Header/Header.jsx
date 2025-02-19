// import { isAction } from "@reduxjs/toolkit";
// import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import Button from "../Button/Button";
// import LogOutBtn from "./LogOutBtn";
// import { useSelector } from "react-redux";

// function Header() {
//   const authStatus = useSelector((state) => state.auth?.status);

//   const navigate = useNavigate();
//   const navItems = [
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//     },
//     {
//       name: "SignUp",
//       slug: "/signup",
//       active: !authStatus,
//     },
//     {
//       name: "All Posts",
//       slug: "/allposts",
//       active: authStatus,
//     },
//     {
//       name: "Add Post",
//       slug: "/addpost",
//       active: authStatus,
//     },
//   ];

//   return (
//     <div className="relative">
//       <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           {/* logo hai  */}
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               <div class="flex items-center space-x-3">
//                 <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold text-lg">
//                   ZCA
//                 </div>
//                 <span class="text-2xl font-extrabold text-blue-500 ">
//                   TechX
//                 </span>
//               </div>
//             </span>
//           </Link>

//           <div className="flex md:order-2 space-x-2 rtl:space-x-reverse">
//             {/* yaha pe mujhe conditional rendering karani hia */}
//             {/* authStatus false hai toh mujhe login and logout wala btn dekhana hai */}
//             <ul className="flex gap-2">
//               {navItems.map((item) =>
//                 item.active ? (
//                   <li key={item.slug}>
//                     {" "}
//                     <button
//                       onClick={() => navigate(item.slug)}
//                       className=" hover:cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       {item.name}
//                     </button>{" "}
//                   </li>
//                 ) : null
//               )}
//             </ul>
//             {/* {navItems.map((item) => (item.active ? <Button children={item.name} ></Button> : null))} */}

//             {/* user authenticated  hai toh toh mei use kyu login ans signup wala btn dikho ga*/}
//             {authStatus && (
//               <li>
//                 <LogOutBtn />
//               </li>
//             )}

//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     ` ${isActive ? "text-blue-500" : "text-white"}
//                    block py-2 px-3 hover:text-gray-300`
//                   }
//                   aria-current="page"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/allposts"
//                   className={({ isActive }) =>
//                     ` ${isActive ? "text-blue-500" : "text-white"}
//                      block py-2 px-3 hover:text-gray-300`
//                   }
//                   aria-current="page"
//                 >
//                   All Posts
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/service"
//                   className={({ isActive }) =>
//                     ` ${isActive ? "text-blue-500" : "text-white"}
//                      block py-2 px-3 hover:text-gray-300`
//                   }
//                 >
//                   Services
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     ` ${isActive ? "text-blue-600" : "text-white"}
//                    block py-2 px-3 hover:text-gray-300 `
//                   }
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;

// TODO:

import React, { act } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogOutBtn from "./LogOutBtn";

function Header() {
  const authStatus = useSelector((state) => state.auth?.status);
  const navigate = useNavigate();

  const navItems = [
  
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/allposts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/addpost",
      active: authStatus,
    },
  ];
  console.log(navItems[2].slug);

  return (
    <div className="relative">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* logo hai  */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold text-lg">
                  ZCA
                </div>
                <span className="text-2xl font-extrabold text-blue-500 ">
                  TechX
                </span>
              </div>
            </span>
          </Link>

          <div className="flex md:order-2 space-x-2 rtl:space-x-reverse">
            {/* yaha pe mujhe conditional rendering karani hia */}
            {/* authStatus false hai toh mujhe login and logout wala btn dekhana hai */}
            <ul className="flex gap-2">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.slug}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="hover:cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
            </ul>

            {/* user authenticated hai toh toh mei use kyu login ans signup wala btn dikho ga */}
            {authStatus && (
              <li>
                <LogOutBtn />
              </li>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-500" : "text-white"}
                   block py-2 px-3 hover:text-gray-300`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allposts"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-500" : "text-white"}
                     block py-2 px-3 hover:text-gray-300`
                  }
                  aria-current="page"
                >
                  All Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-500" : "text-white"}
                     block py-2 px-3 hover:text-gray-300`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-600" : "text-white"}
                   block py-2 px-3 hover:text-gray-300`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
