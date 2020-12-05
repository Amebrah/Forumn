import APIClient from '../Api/APIClient';
import React, { useState } from "react";
import { Grid } from "@material-ui/core"
function Login() {

	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
  
  const onSubmit = (event) => {
    event.preventDefault();
    const response = APIClient.login(username, password)
    console.log(response)
	};


  return (
    <div className="Login">
      <h1> Create Account</h1>

    </div>
  );
}

export default Login;