import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // để dùng matcher như toBeInTheDocument
import Count from "./Count";

test("renders counter and button", () => {
  render(<Count />);
  const btn = screen.getByText("+");

  // Kiểm tra element có trong DOM
  expect(btn).toBeInTheDocument();

  // Kiểm tra text hiển thị ban đầu
  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});

test("increments counter when button is clicked", () => {
  render(<Count />);
  const btn = screen.getByText("+");

  // Ban đầu
  expect(screen.getByText("Count: 0")).toBeInTheDocument();

  // Click nút 1 lần
  fireEvent.click(btn);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();

  // Click thêm lần nữa
  fireEvent.click(btn);
  expect(screen.getByText("Count: 2")).toBeInTheDocument();
});
