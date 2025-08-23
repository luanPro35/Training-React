import React from "react";
import Footer from "./components/footer";

const Layout = (props) => {
  return (
    <div className="container mx-auto p-4">
      {" "}
      {/* Added Tailwind classes */}
      <h1 className="text-2xl font-bold mb-4">{props.title}</h1>{" "}
      {/* Added Tailwind classes */}
      <div className="mb-4">{props.children}</div> <Footer />
    </div>
  );
};

export default Layout;
