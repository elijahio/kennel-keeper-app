import React from "react";
import "./Banner.css";

const Banner = ({ children }) =>
  <div className="jumbotron center-parent" id="login-banner">
    {children}
  </div>;

export default Banner;