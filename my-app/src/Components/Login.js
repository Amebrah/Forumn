import APIClient from '../Api/APIClient';
import React, { useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core"
import {Link} from "react-router-dom";
import theme from "../CSS/theme.js"
import { ThemeProvider } from '@material-ui/styles';
import { FormControl } from '@material-ui/core';


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
        <ThemeProvider theme={theme}>
          <Grid container style = {{minHeight: '100vh'}} spacing={0}  direction="column"  alignItems="center">
            <Grid item xs={12} sm={12}>
                  <div className="Logging In">
                    <h1> Login</h1>
                  </div>
                  <div className = "Creating Account">
                      <FormControl margin = "normal">
                            <TextField label="Username" value = {username} onChange={e => { setUserName(e.target.value) }} spacing={4} />
                            <TextField label="Password" value = {password} onChange={e => { setPassword(e.target.value) }} spacing={4}/>
                          <Button onClick={onSubmit} variant="contained" component="span" spacing={4}>
                          Login
                          </Button>
                      </FormControl>
                  </div>
              </Grid>
          </Grid>
        </ThemeProvider>
      <Button component = {Link} to = "/Register" spacing={4}>
        Register
      </Button>
    </div>
  );
}

export default Login;