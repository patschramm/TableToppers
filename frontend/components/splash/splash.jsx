import React from "react";
import NavbarContainer from "../navbar/navbar_container";

const Splash = () => (
  <>
    <header className="splash-header">
      <div className="splash-wrapper">
        <NavbarContainer />
      </div>
      <h1>
        <a href="/" className="splash-title"> TableToppers </a>
      </h1>
    </header>

    <div className="splash-main"></div>
  </>
);

export default Splash;
