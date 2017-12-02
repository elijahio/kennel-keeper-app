import React from "react";
import "./DogTaskList.css";


export const DogTaskList = ({children}) => {
	return (


		<table className="table table-bordered table-dark">
			<thead>
			    <tr>
			      <th scope="col">Shift</th>
			      <th scope="col">Med's Given</th>
			      <th scope="col">Swept Kennel</th>
			      <th scope="col">Mopped Kennel</th>
			      <th scope="col">Changed Bedding</th>
			      <th scope="col">Cleaned Outdoor Kennel</th>
			      <th scope="col">Sprayed Outdoor Kennel</th>
			     </tr>
			   </thead>
			    <tbody>
			    	<tr>
			    		<td>Check</td>
			    		<td>Check</td>
			    		<td>Check</td>
			    		<td>Check</td>
			    		<td>Check</td>
			    		<td>Check</td>
			    		<td>Check</td>
			    	</tr>
			 </tbody>

		</table>
		);
};

export default DogTaskList;