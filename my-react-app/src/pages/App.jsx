import React, { useState } from "react";
import Child from "../Child";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Child name="John" />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default App;
