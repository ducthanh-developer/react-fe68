import React, { Component } from "react";

export default class DemoConditionalRendering extends Component {
  loggedIn = false;
  username = "ducnt";

  checkLogIn = () => {
    if (this.loggedIn) {
      return <h1>Welcome {this.username} to my site !</h1>;
    }
    return <button className="btn btn-danger">LogIn</button>;
  };
  render() {
    return (
      <div className="text-center">
        <h1 className="my-4">Conditional Rendering</h1>
        {this.checkLogIn()}
        {this.loggedIn ? (
          <h1>Welcome {this.username} to my site !</h1>
        ) : (
          <button className="btn btn-danger">LogIn</button>
        )}
        {this.loggedIn && <h1>Welcome {this.username} to my site !</h1>}
        {!this.loggedIn && <button className="btn btn-danger">LogIn</button>}
      </div>
    );
  }
}
