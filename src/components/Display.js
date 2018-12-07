import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

const TrafficLightsDisplay = ({ red, amber, green, onClick }) => (
  <div className="black-box" onClick={onClick}>
    <div className={`light ${red ? "red" : "inactive"}`} />
    <div className={`light ${amber ? "amber" : "inactive"}`} />
    <div className={`light ${green ? "green" : "inactive"}`} />
  </div>
);

TrafficLightsDisplay.propTypes = {
  red: PropTypes.bool,
  amber: PropTypes.bool,
  green: PropTypes.bool,
  onClick: PropTypes.func
};

export default TrafficLightsDisplay;
