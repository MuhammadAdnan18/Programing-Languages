//In this project we will create a meetup app and we will be learning the use of routing
//routing is a way to tell browser which components or pages should be loaded for specific URL for this we create a pages folder and store ifferent pages there
import React from "react";
import ReactDOM from "react-dom/client";
//First install router dom from terminal by cpmmand: npm install react-router-dom
//now we import browser router to include app in routing process it is a component which is wrapped around <App/> with opennig and closing tag
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
