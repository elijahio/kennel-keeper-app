import React, { Component } from "react";
import Login from "../../components/Login";
import Button from "../../components/Button";
import LoginBanner from "../../components/Banners/LoginBanner";
import "./VolunteerLogin.css";

class VolunteerLogin extends Component {


	render(){
		return(
			 <div className="container-fluid">
        		<div className="row">
          			<div className="col-md-12">
	          			<LoginBanner>
	          			  	<div className="center-child">
	          			  		<h2>Volunteer Login</h2>
		          			  <Login></Login>
      						</div>
	      				</LoginBanner>
          			</div>
          		</div>
          	</div>
			);
	}
}
export default VolunteerLogin;