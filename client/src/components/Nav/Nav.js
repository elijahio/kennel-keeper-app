import React from "react";

const navLinkStyle ={
  float: 'right',
};

const Nav = () =>

  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
        Kennel Keeper
        </a>  
      </div> 
      <div className="navbar-links" style={navLinkStyle}>
          <a href="/aboutUs" className="navbar-brand aboutUs">
          About Us 
          </a>
          <a href="https://github.com/elijahio/kennel-keeper" target="_blank" rel="noopener noreferrer" className="navbar-brand aboutUs">
          Github 
          </a>
          <a href="/login" className="navbar-brand aboutUs">
          Login
          </a>
       </div>
      </div>
   </nav>
 ;

export default Nav;