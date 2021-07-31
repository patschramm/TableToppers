import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }
  render() {
    return (
      <>
        <form className="splash-search-wrapper" action="">
          <div className="search-input-wrapper">
            <input
              className="splash-search search-bar"
              placeholder="Find local game stores, game cafes..."
              type="text"
            />
            <span>|</span>
            <input
              className="splash-search search-bar"
              placeholder="Portland area for now"
              type="text"
            />
          </div>
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </>
    );
  }
}

export default Search;
