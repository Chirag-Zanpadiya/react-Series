import React from "react";
import { useNavigate } from "react-router-dom";

function AllPost() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-[#1A1A19]" >
      <div class="  inset-0 w-2xl  bg-opacity-75 flex items-center justify-center px-4">
        <div class="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full transform transition duration-500 hover:scale-105">
          {/* <!-- Lock Icon using SVG --> */}
          <div class="flex justify-center mb-6">
            <svg
              class="h-16 w-16 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11v4a2 2 0 002 2h6a2 2 0 002-2v-4c0-1.657-1.343-3-3-3m0 0V7a3 3 0 00-6 0v4m6 0H6"
              />
            </svg>
          </div>
          {/* <!-- Heading --> */}
          <h2 class="text-2xl font-bold text-center text-white mb-4">Access Restricted</h2>
          {/* <!-- Description --> */}
          <p class="text-lg text-center text-white mb-6">
            Please log in to read all posts.
          </p>
          {/* <!-- Login Button --> */}
          <button
          onClick={()=>navigate("/login")}
          class="w-full hover:cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllPost;




// TODO:NEW code


