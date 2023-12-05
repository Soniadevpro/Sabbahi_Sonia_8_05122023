import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";

const root = document.getElementById("root");

const app = <App />;

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(app);
