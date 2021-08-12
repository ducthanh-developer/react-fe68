import React, { Component } from "react";
import Counter from "./Counter";

export default class DemoReactLifeCircles extends Component {
  state = {
    isShowCounter: true,
  };
  removeCounter = () => {
    this.setState({
      isShowCounter: false,
    });
  };
  render() {
    console.log("DemoReactLifeCircles render");
    return (
      <div>
        {this.state.isShowCounter && <Counter isShowCounter={this.state.isShowCounter} />}
        <button className="btn btn-danger mt-5" onClick={this.removeCounter}>
          Remove counter
        </button>
      </div>
    );
  }
}
