import React, { Component } from "react";

const data = {
  title: ["Achievement1", "Achievement2"],
  text: ["here stated my first achievement", "here stated my first achievement"]
};
class Achievments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="helloContainer">
        <h4>{this.props.data}</h4>
      </div>
    );
  }
}

export default Achievments;
