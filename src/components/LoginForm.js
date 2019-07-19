import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "./Dialog.js";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader title="Login Form Placeholder."/>
          <CardContent>Form data</CardContent>
          <CardActions>
            <Button size="small">Log In</Button>
            <Button size="small">Sign Up</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default LoginForm;
