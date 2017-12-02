import React from "react";
import "./DogTimeList.css";


export const DogTimeList = ({children}) => {
	return (


		<table className="table table-bordered table-dark">
			<thead>
			    <tr>
			      <th scope="col">Walk</th>
			      <th scope="col">Outing</th>
			      <th scope="col">Yard Play</th>
			      <th scope="col">Cuddling</th>
			      <th scope="col">Training</th>
			      <th scope="col">Total Time</th>
			     </tr>
			   </thead>
			    <tbody>
			    	<tr>
			    		<td>
				    		<div className="dropdown">
							  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							    Time
							    <span className="caret"></span>
							  </button>
							  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
							    <li><a href="#">5 minutes</a></li>
							    <li><a href="#">10 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							  </ul>
							</div>
			    		</td>
			    		<td>		
			    			<div className="dropdown">
							  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							    Time
							    <span className="caret"></span>
							  </button>
							  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
							    <li><a href="#">5 minutes</a></li>
							    <li><a href="#">10 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							  </ul>
							</div>
						</td>
			    		<td>		
			    		<div className="dropdown">
							  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							    Time
							    <span className="caret"></span>
							  </button>
							  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
							    <li><a href="#">5 minutes</a></li>
							    <li><a href="#">10 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							  </ul>
							</div>
						</td>
			    		<td>		
			    			<div className="dropdown">
							  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							    Time
							    <span className="caret"></span>
							  </button>
							  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
							    <li><a href="#">5 minutes</a></li>
							    <li><a href="#">10 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							  </ul>
							</div>
						</td>
			    		<td>		
			    			<div className="dropdown">
							  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							    Time
							    <span className="caret"></span>
							  </button>
							  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
							    <li><a href="#">5 minutes</a></li>
							    <li><a href="#">10 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							  </ul>
							</div>
						</td>
			    		<td>		
			    			<div className="dropdown">
							  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							    Time
							    <span className="caret"></span>
							  </button>
							  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
							    <li><a href="#">5 minutes</a></li>
							    <li><a href="#">10 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							    <li><a href="#">15 minutes</a></li>
							  </ul>
							</div>
						</td>
			    	</tr>
			 </tbody>

		</table>
		);
};

export default DogTimeList;