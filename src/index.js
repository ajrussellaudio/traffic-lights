import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TrafficLights from "./components/TrafficLights";

const stages = {
  stop: { red: true, amber: false, green: false, next: "readyToGo" },
  readyToGo: { red: true, amber: true, green: false, next: "go" },
  go: { red: false, amber: false, green: true, next: "readyToStop" },
  readyToStop: { red: false, amber: true, green: false, next: "stop" }
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<TrafficLights stages={stages} />, root);
