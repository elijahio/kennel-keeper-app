import React from "react";
import "./ProfilePhoto.css";


const ProfilePhoto = props => (
	<img src={props.children}  className="rounded float-right profile" alt="Photo Unavailable">
	</img>
	);

export default ProfilePhoto;
