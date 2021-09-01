import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import WelcomeContainer from "./welcome/welcome_container";
import { AuthRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import Splash from "./splash/splash";
import BusinessShowContainer from "./business/business_show_container";

const App = () => (
  <>
  <NavbarContainer />
  <div>
    <Switch>
      <Route exact path="/businesses/:id" component={BusinessShowContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
  </div>
  </>
);

export default App;
