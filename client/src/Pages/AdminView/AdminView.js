import React, { Component } from "react";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import ProfilePhoto from "../../components/ProfilePhoto";
import "./AdminView.css";

class AdminView extends Component {


	render(){
		return(
			 <div className="container-fluid">
        		<div className="row">
          			<div className="col-md-12">
	          			<Banner>
	          			  <h2>Welcome, Username!</h2>
                    <div className="col-md-12 volunteerPanel">
                    <h3>Registered Volunteers</h3>
                    <h5><em>Click to see details and edit.</em></h5>
                    <ProfilePhoto />
                    <ProfilePhoto />
                    <ProfilePhoto />
                    <ProfilePhoto />
                    <ProfilePhoto />
                  </div>
	      				</Banner>
          		</div>
          	</div>
        </div>
			);
	}
}
export default AdminView;