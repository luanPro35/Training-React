import React from "react";
import LightState from "./LightState";
import LightReducer from "./LightReducer";
const App = () => {
  return (
    <div>
      <LightState />
      <LightReducer />
    </div>
  );
};

export default App;
