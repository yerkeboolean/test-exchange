import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import reportWebVitals from "./reportWebVitals";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, CurrencyScreen } from "./screens";
import { Layout } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="currency" element={<CurrencyScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
