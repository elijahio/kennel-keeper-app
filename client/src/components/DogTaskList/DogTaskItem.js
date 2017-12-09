import React from "react";





export const DogTaskItem = props =>
  <li className="list-group-item" onClick={props.onClick}>
    {props.children}
    
  </li>;