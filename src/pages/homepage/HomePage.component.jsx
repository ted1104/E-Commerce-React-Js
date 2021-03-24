import React from "react";
// import './HomePage.styles.scss';
import Directory from "../../components/directory/directory.component";
import { HomePageContainerStyle } from "./homePage.style";

const HomePage = () => (
  <HomePageContainerStyle>
    <Directory />
  </HomePageContainerStyle>
  //   <div className="homepage">
  //     <Directory />
  //   </div>
);

export default HomePage;
