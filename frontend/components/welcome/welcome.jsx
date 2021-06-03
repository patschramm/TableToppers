import React from "react";
import { Link } from "react-router-dom";

const Welcome = ({ currentUser, logout }) => {
  const personalWelcome = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
    </hgroup>
  );

  return currentUser ? personalWelcome() : "";
};

export default Welcome;
