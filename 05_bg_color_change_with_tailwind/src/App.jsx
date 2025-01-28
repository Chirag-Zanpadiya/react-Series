import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createLogger } from "vite";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="flex  justify-center h-[100vh] w-[100vw] bg-black m-0 relative  transition-all duration-300 "
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-row justify-center item-center gap-4 p-4 rounded-xl absolute  bottom-[5px] bg-gray-400">
            <button
              onClick={() => {
                setColor("white");
              }}
              className="bg-white w-[100px] px-4 py-2 rounded-3xl  "
            >
              White
            </button>

          <button
            onClick={() => {
              setColor("red");
            }}
            className="bg-red-500  w-[100px]  px-4 py-2 rounded-3xl "
          >
            Red
          </button>

          <button
            onClick={() => {
              setColor("blue");
            }}
            className="bg-blue-500 text-white w-[100px] px-4 py-2 rounded-3xl"
          >
            Blue
          </button>

          <button
            onClick={() => {
              setColor("green");
            }}
            className="bg-green-500 text-white w-[100px] px-4 py-2 rounded-3xl"
          >
            Green
          </button>

          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="bg-yellow-400 text-black w-[100px] px-4 py-2 rounded-3xl"
          >
            Yellow
          </button>

          <button
            onClick={() => {
              setColor("purple");
            }}
            className="bg-purple-500 text-white w-[100px] px-4 py-2 rounded-3xl"
          >
            Purple
          </button>

          <button
            onClick={() => {
              setColor("pink");
            }}
            className="bg-pink-500 text-white w-[100px] px-4 py-2 rounded-3xl"
          >
            Pink
          </button>

          <button
            onClick={() => {
              setColor("teal");
            }}
            className="bg-teal-500 text-white w-[100px] px-4 py-2 rounded-3xl"
          >
            Teal
          </button>

          <button
            onClick={() => {
              setColor("orange");
            }}
            className="bg-orange-500 text-white w-[100px] px-4 py-2 rounded-3xl"
          >
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
