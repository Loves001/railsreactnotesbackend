import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import {App} from "./components/App";
//import { createRoot } from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {AppState} from "./AppState.jsx";

//const root = createRoot(document.querySelector("#root"));
ReactDom.render(<AppState><Router><App/></Router></AppState>,document.querySelector("#root"));
