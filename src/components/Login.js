import React, { Component } from "react";
//Components
import AppBar from "./AppBar.js";
import LoginForm from "./LoginForm.js";
//material-ui

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const classes = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  root: {
    padding: theme.spacing(3, 2)
  }
}));

class Login extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "10vh" }}
        >
          {/*100vh will be full height... */}
          <Grid item xs={3}>
            <LoginForm />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;
