import React from "react";
import FormInput from "./../form-input/form-input.component";
import CustomButtom from "./../custom-buttom/custom-buttom.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password != confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName }, () => {
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }); //we put display In {} because it is a value amd user and object
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title"> I do not have a account </h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={TouchList.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onchange={this.handleChange}
            lable="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onchange={this.handleChange}
            lable="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onchange={this.handleChange}
            lable="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onchange={this.handleChange}
            lable="Confirm Password"
            required
          />
          <CustomButtom type="submit"> Sign Up </CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignUp;
