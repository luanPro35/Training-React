import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Count;
