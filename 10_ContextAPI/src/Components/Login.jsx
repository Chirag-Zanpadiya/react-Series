import React, { useState, useContext } from "react";

import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   usecontext hook

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login : </h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

// MUST SEE :

// ✅ **Haan, aapne flow bilkul sahi samjha hai!** 🔥

// ## **💡 Code Flow Explanation (Step by Step)**

// ### **1⃣ State Management with `useState`**
// - Aapne `username` aur `password` ke liye `useState` ka use kiya.
// - Jab bhi user input field me kuch likhega, `setUsername` aur `setPassword` se state update ho jayegi.

// ### **2⃣ Using `useContext` Hook**
// - `UserContext` se `setUser` ka access le liya.
// - Jab user form submit karega, `setUser({ username, password })` call hoga.

// ### **3⃣ Form Submission (`handleSubmit` function)**
// - `e.preventDefault();` se **page reload hone se bachaya**.
// - `setUser({ username, password })` ke through **context ke andar user ka data store kar diya**.

// ### **4⃣ Context Provider se `setUser` ka access**
// - Jo bhi component `UserContext.Provider` ka part hoga, usko `user` aur `setUser` ka access mil jayega.
// - Ab `Profile` component me `useContext(UserContext)` ka use karke `user` ka data use kar sakte hai.

// ---

// ## **📌 Summary (Sahi Flow Hai ✅)**
// - ✅ **User input fields ke state manage ho rahe hai (`useState`)**
// - ✅ **Context API ka use karke `setUser` ko globally accessible banaya**
// - ✅ **Form submit hone par `setUser({ username, password })` call ho raha hai**
// - ✅ **Profile ya kisi aur component me `useContext` ka use karke `user` ko access kar sakte hai**

// ---

// 🚀 **Overall, aapka flow aur samajh dono sahi hai!** 🎯
