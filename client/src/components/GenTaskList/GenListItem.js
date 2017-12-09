import React from "react";

export const GenListItem = props =>
  <li className="list-group-item" onClick={props.onClick}>
    {props.children}
  </li>;
