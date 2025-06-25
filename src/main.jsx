import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import './App.css'
import { Provider } from "react-redux";
import store from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Food-Ordering-Website">
    <Provider store = {store}>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
