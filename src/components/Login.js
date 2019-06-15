import React, { Component } from "react";
// material-ui
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// routing
import { BrowserRouter as Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null
    };
  }

  handleDoesHaveAccount = event => {
    event.persist();
    console.log(event.target.textContent);
  };

  handleDoesNotHaveAccount = event => {
    event.persist();
    console.log(event.target.textContent);
  };

  render() {
    return (
      <div>
        <Paper>
          <h3>Hi. Why don't you log in?</h3>

          <TextField
            required
            id="outlined-required"
            label="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="password"
            margin="normal"
            variant="outlined"
          />
          <Button id="go" onClick={e => this.handleLogin(e)} />
          <p>Don't have an account? {}</p>
          <Link to="/signup">sign up!</Link>
        </Paper>
      </div>
    );
  }
}

export default Login;
