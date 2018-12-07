import React, { useState } from "react";
import PropTypes from "prop-types";
import Display from "./Display";

const TrafficLights = ({ stages }) => {
  const [stage, setStage] = useState(stages.stop);
  return <Display {...stage} onClick={() => setStage(stages[stage.next])} />;
};

TrafficLights.propTypes = {
  stages: PropTypes.shape({
    next: PropTypes.string
  })
};

export default TrafficLights;
