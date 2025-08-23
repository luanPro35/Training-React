import React from "react";
import Layout from "./Layout"; // Corrected import
import Products from "./data"; // Assuming Products is still needed

const App = () => {
  const products = Products; // Assuming Products is still needed

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Layout title="Chào mừng đến với Shop của Luân">
        <p>Đây là cửa hàng online, nơi bạn có thể mua điện thoại mới nhất</p>
      </Layout>

      <Layout title="Danh sách sản phẩm">
        {products.map((item, index) => (
          <p key={index}>
            {item.name}: {item.price}
          </p>
        ))}
      </Layout>
    </div>
  );
};

export default App;
