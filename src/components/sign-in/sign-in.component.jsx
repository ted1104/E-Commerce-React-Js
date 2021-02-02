import React from "react";

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
      <div>
        <h2>I already have an account</h2>
        <span>Sign in With your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email</label>

          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="password">Password</label>

          <input type="submit" value="submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
