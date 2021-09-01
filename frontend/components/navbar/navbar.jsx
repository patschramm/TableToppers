import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/search";

const Navbar = ({ currentUser, logout, location }) => {
  const login_links = () => (
    <nav className="login-signup">
      <Link to="/login" className="login-bttn">
        Login
      </Link>
      &nbsp;
      <Link to="/signup" className="signup-bttn">
        Sign Up
      </Link>
    </nav>
  );

  const logout_bttn = () => (
    <nav className="logout-bttn">
      <div className="personal-welcome">Hi, {currentUser.username}!</div>
      <button onClick={logout}>Logout</button>
    </nav>
  );

  const splashNavBar = () => (
    <nav className="splash-nav nav-bar">
      {currentUser ? logout_bttn(): login_links()}
    </nav>
  )

  const normalNavBar = () => (
    <nav className="normal-nav nav-bar">
      <h4>TableToppers</h4>
      <Search />
      {currentUser ? logout_bttn() : login_links()}
    </nav>
  );

  let currNavBar = null;
  if (location.pathname === "/") {
    currNavBar = splashNavBar();
  } else if (location.pathname === "/signup" || location.pathname === "/login") {
    currNavBar = null
  }

  return (
    <nav className="navbar-wrapper">
      {currNavBar}
    </nav>
  );
};

export default Navbar;
