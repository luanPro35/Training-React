import React from "react";
import Square from "./Square";

const Board = (props) => {
  const { squares, handleClick } = props;
  return (
    <div>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
};

export default Board;
