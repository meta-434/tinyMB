import React, { Component } from "react";
import "./App.css";

import Login from "./components/Login.js";
import Home from "./components/Home.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Router>
      </div>
    );
  }
}
