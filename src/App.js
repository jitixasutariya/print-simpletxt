import React from "react";
import "./App.css";
import Heading from "./Heading";
import Time from "./Time";

function App() {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      <Heading></Heading>
      <Time />
      <div className="container">
        <p style={{ color: "blue", fontSize: 25, margin: 30 }}>
          Today's Date is :- {currentDate}
        </p>
        <p style={{ color: "blue", fontSize: 25, margin: 30 }}>
          Current Time's :- {currentTime}
        </p>
      </div>
    </>
  );
}

export default App;
