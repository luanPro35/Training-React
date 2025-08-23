import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "TURN_ON":
      return "on";
    case "TURN_OFF":
      return "off";
    default:
      return state;
  }
}

const LightReducer = () => {
  const [light, dispatch] = React.useReducer(reducer, "off");

  return (
    <div>
      <h2>Light is {light}</h2>
      <button onClick={() => dispatch({ type: "TURN_ON" })}>Turn On</button>
      <button onClick={() => dispatch({ type: "TURN_OFF" })}>Turn Off</button>
    </div>
  );
};

export default LightReducer;
