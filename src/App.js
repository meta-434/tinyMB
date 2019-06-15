import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route to="/login" component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;
