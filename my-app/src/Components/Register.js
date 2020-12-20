import APIClient from '../Api/APIClient';
import React, { useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { FormControl } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

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
    const response = APIClient.createAccount(username, password)
    console.log(response)
	};


  return (
    <div>
        <Grid container style = {{minHeight: '100vh'}} spacing={0}  direction="column"  alignItems="center">
            <Grid item xs={12} sm={12}>
              <ThemeProvider theme={theme}>
                <div className="Signing Up">
                  <h1> Sign Up</h1>
                </div>
              </ThemeProvider>
                <div className = "Creating Account">
                    <FormControl margin = "normal">
                          <TextField label="Username" value = {username} onChange={e => { setUserName(e.target.value) }} spacing={4} />
                          <TextField label="Password" value = {password} onChange={e => { setPassword(e.target.value) }} spacing={4}/>
                        <Button onClick={onSubmit} variant="contained" component="span" spacing={4}>
                        Register
                        </Button>
                    </FormControl>
                </div>
            </Grid>
        </Grid>
    </div>
  );
}

export default Register;