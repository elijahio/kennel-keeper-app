import React, { Component } from "react";
import Login from "../../components/Login";
import Button from "../../components/Button";
import "./AdminLogin.css";

class AdminLogin extends Component {


	render(){
		return(
			 <div className="container-fluid">
        		<div className="row">
          			<div className="col-md-12">
	          			<Login>
	          			  
	      				</Login>
          			</div>
          		</div>
          	</div>
			);
	}
}
export default AdminLogin;