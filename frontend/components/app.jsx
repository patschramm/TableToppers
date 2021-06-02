import React from "react";
import {Route} from "react-router-dom"
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import WelcomeContainer from "./welcome/welcome_container";

const App = () => (
  <div>
    <header>
      <h1>TableToppers</h1>
      <WelcomeContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
