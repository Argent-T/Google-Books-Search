import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Title from "./components/Title";


function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Title />
      </div>   
    </Router>
  );
}


export default App;
