import React from "react";

const Status = ({ winner, xIsNext }) => {
  return (
    <div>
      {winner ? (
        <h2>Winner: {winner}</h2>
      ) : (
        <h2>Next Player: {xIsNext ? "X" : "O"}</h2>
      )}
    </div>
  );
};

export default Status;
