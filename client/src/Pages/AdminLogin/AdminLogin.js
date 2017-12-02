import React, { Component } from "react";
import Login from "../../components/Login";
import Button from "../../components/Button";
import LoginBanner from "../../components/Banners/LoginBanner";
import "./AdminLogin.css";

class AdminLogin extends Component {

	render(){
		return(
			<LoginBanner>
			<div className="container-fluid">
        		<div className="row">
          			<div className="col-md-12">
	          			<Login></Login>
          			</div>
          		</div>
          	</div>
          	</LoginBanner>
			);
	}
}
export default AdminLogin;