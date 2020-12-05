import APIClient from '../Api/APIClient';
import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './Styles/App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
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
        <Grid container style = {{minHeight: '100vh'}}>
            <Grid item xs={12} sm={12}>
              <ThemeProvider theme={theme}>
                <div className="Signing Up">
                  <h1> Sign Up</h1>
                </div>
              </ThemeProvider>
                <div className = "Creating Account">
                    <form>
                        <label>
                        Username:
                        <input type="text" name="name" onChange={e => { setUserName(e.target.value) }}/>
                        Password:
                        <input type="text" name="name" onChange={e => { setPassword(e.target.value) }}/>
                        </label>
                        <Button onClick={onSubmit}>
                        Register
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    </div>
  );
}

export default Register;