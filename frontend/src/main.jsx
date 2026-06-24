import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#111827",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)"
        }
      }}
    />

    <App />

  </React.StrictMode>
);