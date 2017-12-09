import React, { Component } from "react";
import Banner from "../../components/Banners/LandingBanner";
import Button from "../../components/Button";
import ProfilePhoto from "../../components/ProfilePhoto";
import API from "../../utils/API";
import { DogTaskList, DogTaskItem } from "../../components/DogTaskList";
import DogTimeList from "../../components/DogTimeList";
import "./DogView.css";
import CompleteBtn from "../../components/CompleteBtn";

const strikethroughStyle = (done) => {
  if(done) {
    return { textDecoration: "line-through" }
  }
  else {
    return { textDecoration: "none" }
  }
}

class DogView extends Component {
	state = {
    name: "",
    photo: "",
    meds: false,
    swept: false,
    mopped: false,
    bedding: false,
    cleanedOutdoor: false,
    sprayedOutdoor: false,
    walk: 0,
    outing: 0,
    play: 0,
    cuddling: 0,
    training: 0
  };



  // When component mounts, grab the dogProfile with this id
	componentDidMount() {
    this.loadDog();
	}


  //DOG FUNCTIONS

loadDog = () =>{
  API.getDog(this.props.match.params.id)
   
      .then(res => 
        this.setState(res.data)
        )
      .catch(err => console.log(err));
  };

  toggleMeds = event => {
    API.updateDog(this.state._id, {meds: !this.state.meds})
    .then(res => this.loadDog())
    .catch(err => console.log(err));
  };

  toggleSwept = event => {
    API.updateDog(this.state._id, {swept: !this.state.swept})
    .then(res => this.loadDog())
    .catch(err => console.log(err));
  };


  toggleMopped = event => {
    API.updateDog(this.state._id, {mopped: !this.state.mopped})
    .then(res => this.loadDog())
    .catch(err => console.log(err));
  };

  toggleBedding = event => {
    API.updateDog(this.state._id, {bedding: !this.state.bedding})
    .then(res => this.loadDog())
    .catch(err => console.log(err));
  };

   toggleCleanedOutdoor = event => {
    API.updateDog(this.state._id, {cleanedOutdoor: !this.state.cleanedOutdoor})
    .then(res => this.loadDog())
    .catch(err => console.log(err));
  };

  toggleSprayedOutdoor = event => {
    API.updateDog(this.state._id, {sprayedOutdoor: !this.state.sprayedOutdoor})
    .then(res => this.loadDog())
    .catch(err => console.log(err));
  };


	render(){

		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<Banner>
							<div className="row">
								<div className="col-md-4">
								  <ProfilePhoto>
									  {this.state.photo}
								  </ProfilePhoto>
								</div>
								<div className="col-md-8">
									<h3>Name:  {this.state.name}</h3>
									<h5>Notes:</h5>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<p>Check if done during your shift.</p>

									<DogTaskList>
										<DogTaskItem onClick={this.toggleMeds}><span style={strikethroughStyle(this.state.meds)}>Meds Given</span></DogTaskItem>
                    <DogTaskItem onClick={this.toggleSwept}><span style={strikethroughStyle(this.state.swept)}>Swept Kennel</span></DogTaskItem>
                    <DogTaskItem onClick={this.toggleMopped}><span style={strikethroughStyle(this.state.mopped)}>Mopped Kennel</span></DogTaskItem>
                    <DogTaskItem onClick={this.toggleBedding}><span style={strikethroughStyle(this.state.bedding)}>Changed Bedding</span></DogTaskItem>
                    <DogTaskItem onClick={this.cleanedOutdoor}><span style={strikethroughStyle(this.state.cleanedOutdoor)}>Cleaned Outdoor Kennel</span></DogTaskItem>
                    <DogTaskItem onClick={this.sprayedOutdoor}><span style={strikethroughStyle(this.state.sprayedOutdoor)}>Sprayed Outdoor Kennel</span></DogTaskItem>
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
