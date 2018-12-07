import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TrafficLights from "./components/TrafficLights";

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<TrafficLights />, root);
