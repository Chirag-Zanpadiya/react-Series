import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="relative h-[100vh] w-[100vw]  bg-violet-300 justify-center transition-all duration-150 "
      >
        <div className="flex justify-center ">
          <div className="flex mx-auto flex-row justify-center  gap-3 rounded-full items-center bottom-[12px] bg-black p-10  absolute">
            <button
              onClick={() => setColor("white")}
              className=" px-4 py-2 rounded-full w-[100px] bg-white text-black"
            >
              White
            </button>
            <button
              onClick={() => setColor("blue")}
              className="bg-blue-500 text-white w-[100px] px-4 py-2 rounded-3xl"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              className="bg-green-500 text-white w-[100px] px-4 py-2 rounded-3xl"
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="bg-yellow-400 text-black w-[100px] px-4 py-2 rounded-3xl"
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("purple")}
              className="bg-purple-500 text-white w-[100px] px-4 py-2 rounded-3xl"
            >
              Purple
            </button>
            <button
              onClick={() => setColor("pink")}
              className="bg-pink-500 text-white w-[100px] px-4 py-2 rounded-3xl"
            >
              Pink
            </button>
            <button
              onClick={() => setColor("teal")}
              className="bg-teal-500 text-white w-[100px] px-4 py-2 rounded-3xl"
            >
              Teal
            </button>
            <button
              onClick={() => setColor("orange")}
              className="bg-orange-500 text-white w-[100px] px-4 py-2 rounded-3xl"
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
