import React from "react";
import ReactDOM from "react-dom/client";

let name = "Jitixa";

function Time() {
  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12 ? "PM" : "AM") greet = "Good Morning";
  else if (hrs >= 12 ? "PM" : "AM" && hrs <= 17 ? "PM" : "AM")
    greet = "Good Afternoon";
  else if (hrs >= 17 ? "PM" : "AM" && hrs <= 24 ? "PM" : "AM")
    greet = "Good Evening";
  return (
    <p style={{ color: "red", margin: 20 }} className="heading">
      Hello! {greet}
    </p>
  );
}

export default Time;
