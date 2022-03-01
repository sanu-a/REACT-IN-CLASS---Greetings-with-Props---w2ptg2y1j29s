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
    </>
  );
}

export default App;
