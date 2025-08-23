import React from "react";
import Board from "./Board";

const Square = ({ value, onClick }) => {
  return (
    <button className="w-16 h-16 border-2 border-gray-500" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
