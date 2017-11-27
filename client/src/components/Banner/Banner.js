import React from "react";

const Banner = ({ children }) =>
  <div style={{ height: 300 }} className="jumbotron">
    {children}
  </div>;

export default Banner;