import React, { memo } from "react";

const Child = memo(({ name }) => {
  console.log("Child rendered");
  return <div>Hello {name}</div>;
});

export default Child;
