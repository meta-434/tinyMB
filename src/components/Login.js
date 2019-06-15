import React, { Component } from "react";
//Components
import Dialog from "./Dialog.js";
import AppBar from "./AppBar.js";
import LoginForm from "./LoginForm.js";
//material-ui
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
          <Grid item xs={3}>
            <LoginForm />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;
