import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import "./header.styles.scss";
// import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HeaderContainerStyle,
  LogoContainerStyle,
  OptionsContainerStyle,
  // OptionLink,
  // OptionDiv,
  OptionLinks,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainerStyle>
    <LogoContainerStyle to="/">
      <Logo className="logo" />
    </LogoContainerStyle>
    <OptionsContainerStyle>
      <OptionLinks to="/shop">SHOP</OptionLinks>
      <OptionLinks to="/shop">CONTACT</OptionLinks>
      {currentUser ? (
        <OptionLinks as="div" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT{" "}
        </OptionLinks>
      ) : (
        <OptionLinks to="/signin">SIGN IN</OptionLinks>
      )}
      <CartIcon />
    </OptionsContainerStyle>
    {hidden ? null : <CartDropdown />}
  </HeaderContainerStyle>
);

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// }); //without selector

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// }); // WITH MULTIPLE SELECTORS

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
