import React, { Component } from "react";

export default class Counter extends Component {
  //   Mounting
  constructor(props) {
    super();
    console.log("Counter contructor");
    // this.state = {};
  }

  state = {
    number: 0,
  };
  increase = () => {
    this.setState({
      number: (this.state.number += 1),
    });
  };
  decrease = () => {
    this.setState({
      number: (this.state.number -= 1),
    });
  };

  //   Mounting và Updating
  render() {
    console.log("Counter render");
    return (
      <div className="text-center">
        <h1 className="my-5">Counter</h1>
        <button className="btn btn-danger" onClick={this.decrease}>
          -
        </button>{" "}
        {this.state.number}{" "}
        <button className="btn btn-success" onClick={this.increase}>
          +
        </button>
      </div>
    );
  }

  //   Mounting
  componentDidMount() {
    //   Dùng để call api
    console.log("Counter componentDidMount");
  }

  //   Updating
  componentDidUpdate() {
    console.log("Counter componentDidUpdate");
  }

  // UnMounting
  componentWillUnmount() {
    console.log("Counter componentWillUnmount");
  }
}
