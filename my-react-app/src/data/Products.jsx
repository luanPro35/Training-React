import React from "react";

const Products = (props) => {
  return (
    <div>
      {props.children}
      <div className="border rounded-2xl p-4 m-4 shadow-md bg-white hover:shadow-lg transition">
        <h2 className="text-xl font-bold text-blue-600 mb-2">
          {props.product.tensanpham}
        </h2>
        <p className="text-gray-700">
          💰 Price: {props.product.gia.toLocaleString()} VND
        </p>
        <p className="text-gray-500">📖 {props.product.mota}</p>
      </div>
    </div>
  );
};

export default Products;
