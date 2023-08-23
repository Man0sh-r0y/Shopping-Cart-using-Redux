import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />   
            <Toaster />
        </Provider>
    </BrowserRouter>
);
