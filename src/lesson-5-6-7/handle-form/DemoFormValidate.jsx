import React, { Component } from "react";

export default class DemoFormValidate extends Component {
  state = {
    values: {
      email: "",
      password: "",
    },

    errors: {
      email: "",
      password: "",
    },

    isValidEmail: false,
    isValidPassword: false,
    isValidForm: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        values: {
          ...this.state.values,
          [name]: value,
        },
      },
      console.log(this.state.values)
    );
  };

  handleError = (event) => {
    const { name, value } = event.target;
    let { isValidEmail, isValidPassword } = this.state;
    let errMessage = "";
    //   validate empty
    if (value === "") {
      errMessage = `${name} can not be empty!`;
    }

    switch (name) {
      case "email":
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (value && !value.match(regex)) {
          errMessage = "invalid email!";
        }
        isValidEmail = errMessage === "" ? true : false;
        break;
      case "password":
        if (value && (value.length < 6 || value.length > 10)) {
          errMessage = "password should be 6 to 10 characters!";
        }
        isValidPassword = errMessage === "" ? true : false;
        break;
      default:
        break;
    }

    this.setState(
      {
        errors: {
          ...this.state.errors,
          [name]: errMessage,
        },
        isValidEmail,
        isValidPassword,
      },
      () => {
        this.validateForm();
      }
    );
  };

  validateForm = () => {
    const { isValidEmail, isValidPassword } = this.state;
    this.setState({
      isValidForm: isValidEmail && isValidPassword,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isValidForm) {
      console.log("Submited!");
      console.log(this.state.values);
    } else {
      console.log("Form has errors!");
    }
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
              value={this.state.values.email}
              onChange={this.handleChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            <small className="form-text text-danger">
              {this.state.errors.email}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={this.state.values.password}
              onChange={this.handleChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            <small className="form-text text-danger">
              {this.state.errors.password}
            </small>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.isValidForm}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
