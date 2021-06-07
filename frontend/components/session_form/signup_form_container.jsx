import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, resetSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    navLink: (
      <Link
        to="/login"
        onClick={(e) => {
          dispatch(resetSessionErrors());
        }}
      >
        Log in
      </Link>
    ),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
