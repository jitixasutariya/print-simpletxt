import React from "react";
import ReactDOM from "react-dom/client";

let name = "Jitixa";

function Heading() {
  return (
    <h1 style={{ margin: 20 }} className="heading">
      Hello! My Name is {name}
    </h1>
  );
}

export default Heading;
