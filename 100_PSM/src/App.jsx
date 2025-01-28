import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Card from "./Component/Card";
import "./App.css";

function App() {

  return (
    <>
      <Card  username="Chirag"/>
      <Card  username="Prashant"/>
    </>
  );
}

export default App;
