import APIClient from '../Api/APIClient';
import React, { useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { FormControl } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import {Link} from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Arial'
    ].join(','),
  },
  palette: {
    primary: blue,
  },
});


function Register() {

	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
  
  const onSubmit = (event) => {
    event.preventDefault();
    APIClient.createAccount(username, password).then((response) => {
      console.log(response);
    })
    .catch(error => {
      console.log('Error found when creating meeting');
    })
	};


  return (
    <div>
        <ThemeProvider theme={theme}>
        <Grid container style = {{minHeight: '100vh'}} spacing={0}  direction="column"  alignItems="center">
            <Grid item xs={12} sm={12}>
                <div className="Signing Up">
                  <h1> Sign Up</h1>
                </div>
                <div className = "Creating Account">
                    <FormControl margin = "normal">
                          <TextField label="Username" value = {username} onChange={e => { setUserName(e.target.value) }} spacing={4} />
                          <TextField label="Password" value = {password} onChange={e => { setPassword(e.target.value) }} spacing={4}/>
                    </FormControl>
                </div>
                <Grid item xs={12} sm={12}>
                <Button onClick={onSubmit} variant="contained" component="span" spacing={4} color = "secondary">
                        Register
                        </Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button component = {Link} to = "/" spacing={4} color = "primary">
                    Login Page
                  </Button>
                </Grid>
            </Grid>
        </Grid>
        </ThemeProvider>
    </div>
  );
}

export default Register;