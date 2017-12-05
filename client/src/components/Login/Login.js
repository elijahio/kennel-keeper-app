import React from "react";
import "./Login.css";

const Login = () =>

<form method="GET" action="/adminview">
	<div>
		<label for="username"></label>
	    <input type="text" id="username" placeholder="Username"></input>
    </div>
    <div>
	    <label for="password"></label>
	    <input type="text" id="password" placeholder="Password"></input>
    </div>
    <div>
    	<input type="submit" value="Submit" id="submit"></input>
    </div>
</form>

export default Login;