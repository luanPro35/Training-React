import React from "react";
const Card = (prop) => {
  return (
    <div key={prop.product.id}>
      <h1>{prop.product.nameAuthor}</h1>
      <h2>{prop.product.number}</h2>
    </div>
  );
};
export default Card;
