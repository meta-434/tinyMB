import React, { Component } from "react";
import "./App.css";

import Login from "./components/Login.js";
import Home from "./components/Home.js";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";

// **TODO** Implement context api
export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </div>
    );
  }
}
