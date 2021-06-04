import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, logout }) => {

    const login_links = () => (
      <nav className="login-signup">
        <Link to="/login" className="login-bttn">Login</Link>
        &nbsp;
        <Link to="/signup" className="signup-bttn">Sign Up</Link>
      </nav>
    );

    const logout_bttn = () => (
        <nav className="logout-bttn">
            <button onClick={logout}>Logout</button>
        </nav>
    );

    return (
        <nav className="navbar-wrapper">
            { currentUser ? logout_bttn() : login_links() }
        </nav>
    )
};

export default Navbar;
