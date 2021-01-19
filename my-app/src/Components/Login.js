import APIClient from '../Api/APIClient';
import React, { useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core"
import {Link} from "react-router-dom";
import theme from "../CSS/theme.js"
import { ThemeProvider } from '@material-ui/styles';
import { FormControl } from '@material-ui/core';
import Box from '@material-ui/core/Box';

function Login() {

	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    APIClient.login(username, password).then((response) => {
      console.log(response);
    })
    .catch(error => {
      console.log('Error found when creating meeting');
    })
	};


  return (
    <div className="Login">
        <ThemeProvider theme={theme}>
        
        <Box border = {1} borderRadius="borderRadius" width={1/4} alignItems="center" justify="center" color="secondary">
            <Grid container spacing={0}  direction="column"  alignItems="center">
              <Grid item xs={12} sm={12}>
                    <div className="Logging In">
                      <h1> Login</h1>
                    </div>
              </Grid>
              <Grid item xs={12} sm={12}>
                    <div className = "Creating Account">
                        <FormControl margin = "normal">
                              <TextField label="Username" value = {username} onChange={e => { setUserName(e.target.value) }} spacing={4} />
                              <TextField label="Password" value = {password} onChange={e => { setPassword(e.target.value) }} spacing={4}/>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                <Button onClick={onSubmit} variant="contained" component="span" color = "primary">
                            Login
                            </Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                <Button component = {Link} to = "/Register" spacing={4} color = "secondary">
                    Register
                  </Button>
                </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
    </div>
  );
}

export default Login;