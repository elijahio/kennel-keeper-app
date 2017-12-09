import React, { Component } from "react";
import Banner from "../../components/Banners/LoginBanner";
import Button from "../../components/Button";
import ProfilePhoto from "../../components/ProfilePhoto";
import API from "../../utils/API";
import { GenTaskList, GenListItem } from "../../components/GenTaskList";
import "./AdminView.css";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import AddPhoto from "../../components/AddPhoto";
import Footer from "../../components/Footer";


class AdminView extends Component {

 
  state = {
   tasks: [],
   users: [], 
   dogs: [],
   genTaskName: "",
   userName: "",
   userPhoto: "",
   userEmail: "",
   userPhone: "",
   dogName: "",
   dogPhoto: ""
  };

  componentDidMount() {
    this.loadGenTasks();
    this.loadUsers();
    this.loadDogs();
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };





  //GENERAL TASK FUNCTIONS
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




//USER FUNCTIONS
  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, userName: "", userPhoto: "", userEmail: "", userPhone: ""})
      )
      .catch(err => console.log(err));
  };

   handleUserFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName)  {
      API.saveUser({
        name: this.state.userName,
        photo: this.state.userPhoto,
        email: this.state.userPhoto,
        phone: this.state.userPhone
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
     }
  }; 

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };



  //DOG FUNCTIONS
  loadDogs = () => {
    API.getDogs()
      .then(res =>
        this.setState({ dogs: res.data, dogName: "", dogPhoto: ""})
      )
      .catch(err => console.log(err));
  };

  handleDogFormSubmit = event => {
    event.preventDefault();
    if (this.state.dogName)  {
      API.saveDog({
        name: this.state.dogName,
        photo: this.state.dogPhoto

      })
        .then(res => this.loadDogs())
        .catch(err => console.log(err));
     }
  }; 

 
  
  


  render(){
    return(

       <div className="container-fluid">
          <Banner>
            <h1 id="welcome-username">Welcome, Meg!</h1>
              <div className="volunteerPanel">
                <div className="row aligner">
                  <div className="col-md-6 aligner-item">
                    <h3 id="registered-volunteers-title">Registered Volunteers</h3>
                    <p><em>Click to see details and edit.</em></p>
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
              
              <div className="col-md-4 aligner-item">
                    <form className="add-user">
                      <Input
                        className="form-field"
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                        name="userName"
                        placeholder="Name"
                      />
                      <Input
                        className="form-field"
                        value={this.state.userPhoto}
                        onChange={this.handleInputChange}
                        name="userPhoto"
                        placeholder="Photo Link"
                      />
                      <Input
                        className="form-field"
                        value={this.state.userEmail}
                        onChange={this.handleInputChange}
                        name="userEmail"
                        placeholder="Email"
                      />
                      <Input
                        className="form-field"
                        value={this.state.userPhone}
                        onChange={this.handleInputChange}
                        name="userPhone"
                        placeholder="Phone Number"
                      />
                      <FormBtn
                        onClick={this.handleUserFormSubmit}
                        > Add User
                        </FormBtn>
                    </form>
                  </div>
            </div>

            <hr className="row-separator"></hr>

            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <h3>Tasks Available</h3>
                <p><em>Click to enter or clear a task</em></p>

                <form className="form-inline">
                  <Input
                    className="form-field"
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
              </div>
              <div className="col-md-4"></div>
            </div>

            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
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
              <div className="col-md-4"></div>
            </div>              

            <hr className="row-separator"></hr>

            <div className="row aligner">
              <div className="col-md-8 aligner-item">
                <h3>Animal Profiles</h3>
                <h5><em>Click to see details and edit.</em></h5>


                {this.state.dogs.length ? (

                <div className="dogPhotos">
                <AddPhoto />
                  {this.state.dogs.map(pict => (
                  <a href={'/dogView/:id'}> <ProfilePhoto key={pict._id}> {pict.photo}</ProfilePhoto></a>
                  ))}
                </div>
                  ) : (
                  <h3>No Results to Display</h3>
                  )}

              </div>

              <div className="col-md-4 aligner-item">
                <form className="add-dog">
                  <Input
                    className="form-field"
                    value={this.state.dogName}
                    onChange={this.handleInputChange}
                    name="dogName"
                    placeholder="Doggo Name"
                  />
                  <Input
                    className="form-field"
                    value={this.state.dogPhoto}
                    onChange={this.handleInputChange}
                    name="dogPhoto"
                    placeholder="Photo Link"
                  />

                  <FormBtn
                    onClick={this.handleDogFormSubmit}
                  > Add Doggo
                  </FormBtn>
                </form>
              </div>
          </div>
          <hr className="bottom-page-separator"></hr>
        </div>
    <Footer></Footer>           
    </Banner>

  </div>
);
}
}

export default AdminView;