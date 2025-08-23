import React from "react";
import Products from "./Products";

const ProductList = () => {
  const products = [
    {
      tensanpham: "Samsung Galaxy A32",
      gia: 8000000,
      mota: "Flagship smartphone with 6GB RAM and 128GB storage",
    },
    {
      tensanpham: "iPhone 13",
      gia: 12000000,
      mota: "Latest Apple smartphone with A15 Bionic chip",
    },
  ];

  return (
    <div>
      {products.map((item, index) => (
        <Products key={index} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
