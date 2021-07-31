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
						<p>Find</p>
            <input
              className="splash-search search-bar"
              placeholder="local game stores, game cafes..."
              type="text"
            />
            <span>|</span>
						<p>Near</p>
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
