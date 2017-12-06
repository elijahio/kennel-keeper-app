import React from "react";
import "./ProfilePhoto.css";


const ProfilePhoto = props => (
	<img src={props.children}  className="rounded float-right profile" alt="...">
	</img>
	);

export default ProfilePhoto;