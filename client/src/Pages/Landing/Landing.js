import React, { Component } from "react";
import Banner from "../../components/Banner";
import Button from "../../components/Button";

class Landing extends Component {


	render(){
		return(
			 <div className="container-fluid">
        		<div className="row">
          			<div className="col-md-12">
	          			<Banner>
	          			  <div className="center-child">
		          			  <h2>Kennel Keeper</h2>
	      						<p>Kennel Keeper is a volunteer task manager for shelters.
	      						It allows admin to view which volunteer is on shift, what
	      						general or animal specific tasks they've completed, and
	      						have yet to complete.</p>
      							<a href="/admin" title="Administrator Login" alt="Administrator Login"><Button>ADMINISTRATOR LOGIN</Button></a>
      							<Button>VOLUNTEER LOGIN</Button>
	      					</div>
	      				</Banner>
          			</div>
          		</div>
          	</div>
			);
	}
}
export default Landing;