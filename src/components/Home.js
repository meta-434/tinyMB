import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empty: null
    }
  }

  render() {
    return (
      <div>
        <p>This is the home page</p>
      </div>
    );
  }
}

export default Home;
