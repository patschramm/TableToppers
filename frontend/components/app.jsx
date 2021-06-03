import React from "react";
import {Route, Switch, Redirect} from "react-router-dom"
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import WelcomeContainer from "./welcome/welcome_container";
import { AuthRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container"

const App = () => (
  <div>
    <header>
      <h1>TableToppers</h1>
      <NavbarContainer />
      {/* <WelcomeContainer /> */}
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={WelcomeContainer}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
