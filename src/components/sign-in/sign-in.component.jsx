import React from "react";
import FormInput from "./../form-input/form-input.component";
import CustomButtom from "./../custom-buttom/custom-buttom.component";

import { signInWithGoogle } from "./../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in With your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />

          {/* <label htmlFor="email">Email</label> */}

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />

          {/* <label htmlFor="password">Password</label> */}

          <CustomButtom type="submit" value="submit Form">
            {" "}
            Sign In{" "}
          </CustomButtom>
          <CustomButtom onClick={signInWithGoogle}>
            {" "}
            Sign in with Google
          </CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignIn;
