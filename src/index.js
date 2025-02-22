import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RainbowKitWrapper } from "./rainbotwitProvider";
import WebApp from "@twa-dev/sdk";
// import "@rainbow-me/rainbowkit/styles.css";

WebApp.ready();
// Initialize SDK

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RainbowKitWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RainbowKitWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
