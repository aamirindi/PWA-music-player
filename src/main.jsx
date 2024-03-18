import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = ReactDOM.createRoot(root);
rootElement.render(app);
