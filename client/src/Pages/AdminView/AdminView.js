import React, { Component } from "react";
import Banner from "../../components/Banners/LandingBanner";
import Button from "../../components/Button";
import ProfilePhoto from "../../components/ProfilePhoto";
import API from "../../utils/API";
import { GenTaskList, GenListItem } from "../../components/GenTaskList";
import "./AdminView.css";
import { Input, TextArea, FormBtn } from "../../components/Form";

class AdminView extends Component {

 
  state = {
   name: "",
   completed: "",
  };

  componentDidMount() {
    this.getGenTasks();
  }

  getGenTasks = () => {
    API.getGenTasks()
      .then(res =>
        this.setState({ name: res.data, completed: "" })
      )
      .catch(err => console.log(err));
  };

  deleteGenTask = id => {
    API.deleteGenTask(id)
      .then(res => this.getGenTasks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.getGenTasks())
  //       .catch(err => console.log(err));
  //   }
  // };


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
	      			
                   <div className="row">
                      <div className="col-md-4">
                        <h3>Tasks Available</h3>
                        <h5><em>Click to enter or clear a task</em></h5>
                        <form className="form-inline">
                          <Input
                            // value={this.state.task}
                            // onChange={this.handleInputChange}
                            name="task"
                            placeholder="New Task"
                          />
                          <FormBtn
                            // disabled={!(this.state.task)}
                            // onClick={this.handleFormSubmit}
                          >
                            Add
                          </FormBtn>
                        </form>
                      {this.state.name.length ? (
                        <GenTaskList> 
                          {this.state.name.map(task => (
                          <GenListItem key={task._id}>
                            <strong>
                              {task.name}
                            </strong>

                          </GenListItem>
                         ))}
                        </GenTaskList>
                      ) : (
                          <h3>No Results to Display</h3>
                        )}
                      </div>

                      <div className="col-md-8">
                        <h3>Animal Profiles</h3>
                        <h5><em>Click to see details and edit.</em></h5>
                        <ProfilePhoto />
                        <ProfilePhoto />
                        <ProfilePhoto />
                      </div>
                    </div>
                  </Banner>
          		</div>
          	</div>
        </div>
			);
	}
}
export default AdminView;