import React from "react";

// import "./custom-buttom.styles.scss";
import { CustomButtomContainerStyle } from "./custom-button.style";

const CustomButtom = ({ children, ...props }) => (
  <CustomButtomContainerStyle {...props}>{children}</CustomButtomContainerStyle>
);

export default CustomButtom;
