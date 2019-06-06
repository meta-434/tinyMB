import React, {Component} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
