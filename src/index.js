import React from "react";
// import ReactDOM from 'react-dom/client'; // react 18
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css'

// const root = ReactDOM.createRoot(document.getElementById('root')); // react 18
const root = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
// react 18
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
