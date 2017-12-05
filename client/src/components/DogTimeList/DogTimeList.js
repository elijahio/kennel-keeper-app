import React from "react";
import "./DogTimeList.css";


export const DogTimeList = ({children}) => {
	return (


		<table className="table table-bordered table-dark">
			<thead>
			    <tr>
			      <th scope="col">Task</th>
			      <th scope="col">1st Shift</th>
			      <th scope="col">2nd Shift</th>
			      <th scope="col">3rd Shift</th>
			      <th scope="col">4th Shift</th>
			    </tr>
			</thead>
			    <tbody>
			    	<tr>
			    		<th scope="row">Walk:</th>
			    		<td />
			    		<td />
			    		<td />
			    		<td />
			    	</tr>
			    	<tr>
			    		<th scope="row">Outing:</th>
			    		<td />
			    		<td />
			    		<td />
			    		<td />
			    	</tr>
			    	<tr>
			    		<th scope="row">Play:</th>
			    		<td />
			    		<td />
			    		<td />
			    		<td />
			    	</tr>
			    	<tr>
			    		<th scope="row">Cuddling:</th>
			    		<td />
			    		<td />
			    		<td />
			    		<td />
			    	</tr>
			    	<tr>
			    		<th scope="row">Training:</th>
			    		<td />
			    		<td />
			    		<td />
			    		<td />
			    	</tr>
			    	<tr>
			    		<th scope="row">Total Time:</th>
			    		<td />
			    		<td />
			    		<td />
			    		<td />
			    	</tr>
			 	</tbody>


			</table>
		);
};

export default DogTimeList;