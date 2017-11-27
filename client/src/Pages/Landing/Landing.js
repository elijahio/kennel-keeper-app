import React, { Component } from "react";
import Banner from "../components/Banner";

class Landing extends Component {


	render(){
		return(
			 <Container fluid>
        		<Row>
          			<Col size="md-12">
	          			<Banner>
	          			  	<h2>Kennel Keeper</h2>
	      					<p>Kennel Keeper is a volunteer task manager for shelters. It allows admin to view which 
	      					<br/>volunteer is on shift, what general or animal specific tasks they've completed, and have yet to complete.</p>
	      				</Banner>
          			</Col>
          		</Row>
          	</Container>
			)
	}
}
export default Landing;