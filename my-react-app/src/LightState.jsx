import React, { useState } from "react";

const LightState = () => {
  const [light, setLight] = useState("off");
  return (
    <div>
      <h2>Light is {light}</h2>
      <button onClick={() => setLight("on")}>Turn On</button>
      <button onClick={() => setLight("off")}>Turn Off</button>
    </div>
  );
};

export default LightState;
