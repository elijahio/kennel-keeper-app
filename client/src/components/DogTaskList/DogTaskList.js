import React from "react";
import "./DogTaskList.css";


export const DogTaskList = ({ children }) => {
  return (
    <div className="list-overflow-container taskList">
      <ul className="list-group listItem">
        {children}
      </ul>
    </div>
  );
};

export default DogTaskList;