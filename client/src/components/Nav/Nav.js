import React from "react";
import "./Nav.css"

const navLinkStyle ={
  float: 'right',
};

const Nav = () =>

<nav className="navbar navbar-inverse navbar-top cl-effect-1">
  <div className="container-fluid">
    <div className="navbar-header">
      <h3 className="nav-header"><a href="/" className="navbar-brand">Kennel Keeper</a></h3></div>
      <div className="navbar-links" style={navLinkStyle}>
      <a href="https://github.com/elijahio/kennel-keeper-app#kennel-keeper" target="_blank" className="navbar-brand">What is Kennel Keeper?</a>
      <a href="https://github.com/elijahio/kennel-keeper-app" target="_blank" className="navbar-brand">GitHub</a>
      <a href="/admin" className="navbar-brand">Login</a>
    </div>
    <div className="navbar-mobile-links" style={navLinkStyle}>
      <a href="https://github.com/elijahio/kennel-keeper-app" target="_blank" className="navbar-brand"><i className="fa fa-github" aria-hidden="true"></i></a>
    </div>
  </div>
</nav>
 ;

export default Nav;