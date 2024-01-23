import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
