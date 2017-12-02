import React, { Component } from "react";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import ProfilePhoto from "../../components/ProfilePhoto";
import DogTaskList from "../../components/DogTaskList";
import DogTimeList from "../../components/DogTimeList";
import "./DogView.css";

class DogView extends Component {

	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<Banner> 
							<div className="row">
								<div className="col-md-4">
								  <ProfilePhoto className="dogInfo" />
								</div>
								<div className="col-md-8">
									<h3>Name:</h3>
									<h5>Notes:</h5>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<p>Check if done during your shift.</p>
									<DogTaskList />
								</div>
								<div className="col-md-6">
									<p>Duration of each activity and total time</p>
									<DogTimeList />
								</div>
							</div>
						</Banner>
					</div>
				</div>
			</div>
	
	)};
};

export default DogView;