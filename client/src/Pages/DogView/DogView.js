import React, { Component } from "react";
import Banner from "../../components/Banners/LandingBanner";
import Button from "../../components/Button";
import ProfilePhoto from "../../components/ProfilePhoto";
import API from "../../utils/API";
import { DogTaskList, DogTaskItem } from "../../components/DogTaskList";
import DogTimeList from "../../components/DogTimeList";
import "./DogView.css";

class DogView extends Component {

	constructor(props) {
		super(props)
		this.state = {
			dogProfile: {}
		};
	}

  // When component mounts, grab the dogProfile with this id
	componentDidMount() {
		API.getDog(this.props.match.params.id)
			//.then(res => this.setState({ dogProfile: res.data }))
			.then(res => this.setState({
				dogProfile: res.data
			})).catch(err => console.log(err));
	}

	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<Banner> 
							<div className="row">
								<div className="col-md-4">
								  <ProfilePhoto>
									  {this.state.dogProfile.photo}
								  </ProfilePhoto>
								</div>
								<div className="col-md-8">
									<h3>Name: {this.state.dogProfile.name}</h3>
									<h5>Notes:</h5>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<p>Check if done during your shift.</p>
									<DogTaskList>
										<DogTaskItem>
										Test 
										</DogTaskItem>
									</DogTaskList>
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