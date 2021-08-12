import React, { Component } from "react";

export default class DemoHandleForm extends Component {
  state = {
    email: "",
    password: "",
    emailErr: "",
    passwordErr: "",
  };

  handleChange = (event) => {
    //   target: element xảy ra sự kiện
    // console.log(event.target);
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  validate = () => {
    let emailErr = "";
    let passwordErr = "";

    if (!this.state.email) {
      emailErr = "Email cannot be empty";
    } else {
      emailErr = "";
    }

    if (!this.state.password) {
      passwordErr = "Password cannot be empty";
    } else {
      passwordErr = "";
    }

    // check valid form
    if (emailErr) {
      this.setState({
        emailErr,
      });
      return false;
    }

    if (passwordErr) {
      this.setState({
        passwordErr,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
  };

  render() {
    return (
      <div className="container text-left">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <small className="form-text text-danger">
              {this.state.emailErr}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <small className="form-text text-danger">
              {this.state.passwordErr}
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
