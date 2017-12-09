import React from "react";
import "./DeleteBtn.css";


const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
    <i className="fa fa-trash-o" aria-hidden="true"></i>
  </span>
);

export default DeleteBtn;
