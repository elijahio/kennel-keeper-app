import React from "react";
import "./Login.css";
import Button from "../Button";

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
    <div className="login-button-padding">
        <a href="/adminview"><Button>Login</Button></a>
    </div>
</form>

export default Login;