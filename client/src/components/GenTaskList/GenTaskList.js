import React from "react";
import "./GenTaskList.css";

export const GenTaskList = ({ children }) => {
  return (
    <div className="list-overflow-container taskList">
      <ul className="list-group listItem">
        {children}
      </ul>
    </div>
  );
};

export default GenTaskList;