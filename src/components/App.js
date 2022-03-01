import React, { useState } from "react";
import "../styles/App.css";
import Welcome from "./Welcome";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <input
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <Welcome name={name} />
      <h2>Welcome to Newton School.</h2>
    </>
  );
}

export default App;
