import Register from './Components/Register';
import Login from './Components/Login';

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path = "/">
            <Login/>
        </Route>
        <Route path = "/Register">
          <Register/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
