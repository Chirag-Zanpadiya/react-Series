import { useState, useCallback, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [length, setlength] = useState(8);

  // by default mei false rakh raha hu
  const [numberallowed, setNumberAllowed] = useState(false);
  const [charallowed, setCharAllowed] = useState(false);

  // by default passoword set nahi kiya hai
  const [password, setPassword] = useState("");

  // ek methods hai jo ki passoword ko generate karke deti hai

  // ek usecallBack ka use kare ke kyuki generate methods bar bar call hogi jam check un-check karege , len ko increment karege tab
  // basically ye numberallowed , password , lenght ko ek memory store karke rakhti hai jarurat padi to reuse karti hai

  let passwordGenerator = useCallback(() => {
    //   yaha pe wo logic ayega ki kaise passoword generate kare

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*()_+-={}[]|;<>,.?/";

    for (let i = 1; i <= length; i++) {
      let posOfChar = Math.floor(Math.random() * str.length);

      pass += str[posOfChar];
    }

    setPassword(pass);
  }, [length, numberallowed, charallowed, setPassword]);

  // useRef hook : element ka reference rakh ne keliye hai

  let passwordSelector = useRef(null);

  // copy clip board karne ke liye hai

  let copyClipBoard = () => {
    // use ko ach ecperiance dene ke liye hai
    passwordSelector.current?.select();
    passwordSelector.current?.setSelectionRange(0 ,20);
    // passwordSelector.current.focus();

    window.navigator.clipboard.writeText(password);
  };

  // password generator kab kab call karna hai jab check chad ho check-uncheck per  , length per
  // useEffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, charallowed, numberallowed, passwordGenerator]);

  return (
    <>
      <div className="flex justify-center h-[100vh] w-[100vw] bg-blue-100 py-20  relative ">
        <div className="w-full max-w-md dark:bg-gray-800 space-y-3   py-8 px-4  rounded-2xl">
          <h1 className="text-gray-200 text-center bg-black font-serif font-bold  rounded-full border-1 py-4">
            Password Generator
          </h1>

          {/* /* this ui for the passoword and copt btn*/}
          <div className="py-4 rounded-full flex flex-row  w-full gap-2 max-h-96 relative">
            <input
              value={password}
              readOnly
              type="text"
              ref={passwordSelector}
              placeholder="   Passoword"
              className="text-black text-xl font-bold py-2 bg-white w-[83%] rounded-full ml-1 px-2 h-fit "
            />
            <button
              onClick={copyClipBoard}
              className="w-[17%] rounded-full bg-blue-400 font-bold text-white "
            >
              Copy
            </button>
          </div>

          {/* ui for the range and para  */}
          <div className="py-4 rounded-full flex flex-row  w-full gap-2 max-h-96 justify-around relative">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="  w-[83%] rounded-full ml-1 "
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="py-2 w-[17%]  rounded-full font-bold bg-blue-400  text-white px-2 text-center">
              {length}
            </label>
          </div>

          {/* ui for the checkbox and numberallowed */}
          <div className="py-4 rounded-full flex flex-row  w-full gap-2 max-h-96  relative">
            <input
              defaultChecked={numberallowed}
              // yaha pe kyu prev ka ulta har bar le rahe hai kyu ki
              // kyu ki ham chahte hai ki ek bar jo number password ke a gayo phir aesi situin ban sakti hai ki hame number nahi chahiye
              // is liye value change hoti rahi check un-check kar ne par

              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              type="checkbox"
              className=" w-[8%] bg-amber-100   "
            />
            <p className="py-2  rounded-full font-bold  bg-blue-400  text-white px-2 text-center">
              {" "}
              Number Allowed
            </p>
          </div>

          {/* ui for the checkbox and string allowed */}
          <div className="py-4 rounded-full flex flex-row  w-full gap-2 max-h-96  relative">
            <input
              defaultChecked={charallowed}
              // yaha pe nhi same check un-check karte hai string remove yato add honi chahiye
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              type="checkbox"
              className=" w-[8%] bg-amber-100   "
            />
            <label className="py-2  rounded-full font-bold  bg-blue-400  text-white px-2 text-center">
              String Allowed
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/**
 * **useCallback vs useEffect**
 *
 * ### 1. useCallback: Function Optimization
 * - **Purpose:** Memoize a function to avoid unnecessary re-creation.
 * - **Focus:** Keeps the function reference stable.
 * - **Use Case:** Prevents re-renders in child components when the function is passed as a prop.
 *
 * #### Syntax:
 * ```javascript
 * const memoizedFunction = useCallback(() => {
 *   // Function logic
 * }, [dependencies]);
 * ```
 *
 * #### Example:
 * ```javascript
 * const increment = useCallback(() => {
 *   setCount((prevCount) => prevCount + 1);
 * }, []);
 * ```
 *
 * ---
 *
 * ### 2. useEffect: Side Effects
 * - **Purpose:** Handle side effects like API calls, DOM manipulation, subscriptions, etc.
 * - **Focus:** Executes logic after rendering or when dependencies change.
 * - **Use Case:** Runs side effects after component lifecycle events.
 *
 * #### Syntax:
 * ```javascript
 * useEffect(() => {
 *   // Side effect logic
 *   return () => {
 *     // Cleanup logic (optional)
 *   };
 * }, [dependencies]);
 * ```
 *
 * #### Example:
 * ```javascript
 * useEffect(() => {
 *   console.log("Count changed:", count);
 *   return () => {
 *     console.log("Cleanup on unmount or dependency change");
 *   };
 * }, [count]);
 * ```
 *
 * ---
 *
 * ### Key Differences:
 * | **Aspect**       | **useCallback**               | **useEffect**               |
 * |------------------|-------------------------------|-----------------------------|
 * | **Purpose**      | Optimize function reference   | Handle side effects         |
 * | **Runs On**      | Dependency changes only       | Render or dependency change |
 * | **Return Value** | Memoized function reference   | Optional cleanup function   |
 * | **Use Case**     | Pass stable functions as props| Perform side-effect logic   |
 *
 * ---
 *
 * ### Combined Example:
 * ```javascript
 * import React, { useState, useEffect, useCallback } from "react";
 *
 * function App() {
 *   const [count, setCount] = useState(0);
 *
 *   // Memoized function
 *   const increment = useCallback(() => {
 *     setCount((prev) => prev + 1);
 *   }, []);
 *
 *   // Side effect
 *   useEffect(() => {
 *     console.log("Count updated:", count);
 *     return () => console.log("Cleanup on unmount");
 *   }, [count]);
 *
 *   return (
 *     <div>
 *       <h1>Count: {count}</h1>
 *       <button onClick={increment}>Increment</button>
 *     </div>
 *   );
 * }
 *
 * export default App;
 * ```
 */
