import { DarkMode } from "./context/darkMode";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root/Root";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkMode>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </DarkMode>
  </React.StrictMode>
);
