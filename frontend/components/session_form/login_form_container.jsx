import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, resetSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    navLink: (
      <Link
        to="/signup"
        onClick={(e) => {
          dispatch(resetSessionErrors());
        }}
      >
        Sign Up
      </Link>
    ),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
