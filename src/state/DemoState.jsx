import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    loggedIn: false,
  };

  login = () => {
    //   Không thể cập nhật state trực tiếp
    // this.state.loggedIn = true;
    //  Phải dùng hàm setState() để cập nhật
    this.setState({
        loggedIn: true,
    })
    console.log(this.state.loggedIn);
  };

  render() {
    console.log(this.state.loggedIn);
    return (
      <div className="text-center">
        <h1 className="my-4">State</h1>
        {this.state.loggedIn ? (
          <h1>Welcome to this page !</h1>
        ) : (
          <button className="btn btn-success" onClick={this.login}>
            Login
          </button>
        )}
      </div>
    );
  }
}
