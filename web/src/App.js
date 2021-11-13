import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        {/*   <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              {/* <Route exact path='/' component={Login} /> */}
              {/*   <Route path="/sign-in" component={Login} /> */}

              <Route  exact path="/"  >
                <SignIn />
              </Route>
              <Route path="/sign-in"  >
                <SignIn />
              </Route>
              <Route path="/sign-up"  >
                <SignUp />
              </Route>
              <Route path="/dashborad"  >
              {/*   <Dashboard/> */}
              </Route>
            </Switch>
          </div>
        </div>
      </div></Router>
  );
}

export default App;
