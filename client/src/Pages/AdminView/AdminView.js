import React, { Component } from "react";
import Banner from "../../components/Banners/LoginBanner";
import Button from "../../components/Button";
import ProfilePhoto from "../../components/ProfilePhoto";
import API from "../../utils/API";
import { GenTaskList, GenListItem } from "../../components/GenTaskList";
import "./AdminView.css";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";



class AdminView extends Component {

 
  state = {
   tasks: [],
   users: [], 
   dogs: [],
   genTaskName: ""
  };

  componentDidMount() {
    this.loadGenTasks();
    this.loadUsers();
    this.loadDogs();
  }

  //General Task Functions, DRY? Global function at some point. 
  loadGenTasks = () => {
    API.getGenTasks()
      .then(res =>
        this.setState({ tasks: res.data, genTaskName: ""})
      )
      .catch(err => console.log(err));
  };

  deleteGenTask = id => {
    API.deleteGenTask(id)
      .then(res => this.loadGenTasks())
      .catch(err => console.log(err));
  };



//USER FUNCTIONS
  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data})
      )
      .catch(err => console.log(err));
  };

  //DOG FUNCTIONS
  loadDogs = () => {
    API.getDogs()
      .then(res =>
        this.setState({ dogs: res.data})
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleGenTaskFormSubmit = event => {
    event.preventDefault();
    if (this.state.genTaskName)  {
      API.saveGenTask({
        taskname: this.state.genTaskName,
      })
        .then(res => this.loadGenTasks())
        .catch(err => console.log(err));
     }

  }; 
  


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
                          {this.state.users.length ? (
                          <div className="userPhotos">
                              {this.state.users.map(pic => (
                            <ProfilePhoto key={pic._id}> 
                              {pic.photo}
                            </ProfilePhoto>

                            ))}
                            </div>
                            ) : (
                            <h3>No Results to Display</h3>
                            )}
                          </div>
	      			    
                    <div className="row">
                      <div className="col-md-4">

                        <h3>Tasks Available</h3>
                        <h5><em>Click to enter or clear a task</em></h5>

                        <form className="form-inline">
                          <Input
                            value={this.state.genTaskName}
                            onChange={this.handleInputChange}
                            name="genTaskName"
                            placeholder="New Task"
                          />
                          <FormBtn 
                            // disabled={!(this.state.taskname)}
                            onClick={this.handleGenTaskFormSubmit}
                          >
                            Add
                          </FormBtn>
                        </form>





                        {this.state.tasks.length ? (
                        <GenTaskList> 
                          {this.state.tasks.map(task => (
                          <GenListItem key={task._id}>
                            <strong >
                              {task.taskname}
                            </strong>
                            <DeleteBtn onClick={() => this.deleteGenTask(task._id)} />
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


                        {this.state.dogs.length ? (
                          <div className="dogPhotos">
                              {this.state.dogs.map(pict => (
                            <ProfilePhoto key={pict._id}> 

                              {pict.photo}
                            </ProfilePhoto>

                            ))}
                            </div>
                            ) : (
                            <h3>No Results to Display</h3>
                            )}
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