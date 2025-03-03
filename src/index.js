import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./components/Store";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);




