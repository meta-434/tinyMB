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
        <p>{this.props.sampleString}</p>
      </div>
    );
  }
}

export default Home;
