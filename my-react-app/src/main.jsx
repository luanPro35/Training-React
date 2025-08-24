import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "/src/App.jsx";
import { theme } from "./theme.js";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
