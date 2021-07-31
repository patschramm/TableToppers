import React from "react";
import NavbarContainer from "../navbar/navbar_container";
import Search from "../search/search";
import SearchLinks from "./search_links";

const Splash = () => (
  <>
    <header className="splash-header">
      <div className="overlay"></div>
      <div className="splash-header-photo"></div>
      <div className="splash-wrapper">
        <NavbarContainer />
      </div>
      <h1>
        <a href="/" className="splash-title">
          TableToppers
        </a>
      </h1>
      <Search />
      <SearchLinks />
    </header>

    <div className="splash-main"></div>
  </>
);

export default Splash;
