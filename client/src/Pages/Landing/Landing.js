import React, { Component } from "react";
import LandingBanner from "../../components/Banners/LandingBanner";
import Button from "../../components/Button";
import "./Landing.css";

class Landing extends Component {


	render(){
		return(
			 <div className="container-fluid">
        		<div className="row">
          			<div className="col-md-12">
	          			<LandingBanner>
	          			  <div className="center-child">
		          			  <h1>It's KenneKeep.in time!</h1>
	      						<p>Kennel Keeper is a volunteer task manager for shelters.
	      						It allows admin to view which volunteer is on shift, what
	      						general or animal specific tasks they've completed, and
	      						have yet to complete.</p>
      							<a href="/admin" title="Administrator Login" alt="Administrator Login"><Button>ADMINISTRATOR LOGIN</Button></a>
      							<a href="/volunteer" title="Volunteer Login" alt="Volunteer Login"><Button>VOLUNTEER LOGIN</Button></a>
	      					</div>
	      				</LandingBanner>
          			</div>
          		</div>
          	</div>
			);
	}
}
export default Landing;