import React from "react";
import "./Banner.css";

const Banner = ({ children }) =>
  <div className="jumbotron">
    {children}
  </div>;

export default Banner;