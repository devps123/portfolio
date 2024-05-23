import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 * Entry point of the React application.
 * 
 * This code initializes the React root and renders the main App component into the DOM.
 * 
 * @returns {void}
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
//here root is dom element id where entire react app will be mount inside it.
root.render(<App />);
