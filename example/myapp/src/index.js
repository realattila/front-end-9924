import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let a = 2;

const print = () => {
  a = a + 1;
  console.log("mashhad", a);
};

ReactDOM.render(
  <App age={24} name="attila" print={print} />,
  document.getElementById("root")
);
