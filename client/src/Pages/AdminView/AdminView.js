import React, { Component } from "react";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import ProfilePhoto from "../../components/ProfilePhoto";
import { GenTaskList, GenListItem } from "../../components/GenTaskList";
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
                 <div className="row">
                    <div className="col-md-4">
                      <h3>Tasks Available</h3>
                      <h5><em>Click to enter or clear a task</em></h5>
                      <GenTaskList> 
                        <GenListItem> Dummy info </GenListItem>
                        <GenListItem> Dummy info </GenListItem>
                        <GenListItem> Dummy info </GenListItem>
                        <GenListItem> Dummy info </GenListItem>
                        <GenListItem> Dummy info </GenListItem>
                        <GenListItem> Dummy info </GenListItem>
                      </GenTaskList>
                    </div>
                    <div className="col-md-8">
                      <h3>Animal Profiles</h3>
                      <h5><em>Click to see details and edit.</em></h5>
                      <ProfilePhoto />
                      <ProfilePhoto />
                      <ProfilePhoto />
                    </div>
                  </div>
          		</div>
          	</div>
        </div>
			);
	}
}
export default AdminView;