import React from "react";
import "./Nav.css"

const navLinkStyle ={
  float: 'right',
};

const Nav = () =>

<nav className="navbar navbar-inverse navbar-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <a href="/" className="navbar-brand"><h3 className="nav-header">Kennel Keeper</h3></a></div> 
      <div className="navbar-links" style={navLinkStyle}>
      <a href="https://github.com/elijahio/kennel-keeper-app#kennel-keeper" target="_blank" className="navbar-brand aboutUs">What is Kennel Keeper?</a>
      <a href="https://github.com/elijahio/kennel-keeper-app" target="_blank" className="navbar-brand aboutUs">GitHub</a>
    </div>
    <div className="navbar-mobile-links" style={navLinkStyle}>
      <a href="https://github.com/elijahio/kennel-keeper-app" target="_blank" className="navbar-brand aboutUs"><i className="fa fa-github" aria-hidden="true"></i></a>
    </div>
  </div>
</nav>
 ;

export default Nav;