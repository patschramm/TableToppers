import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }
  render() {
    return (
      <>
        <form className="search-wrapper" action="">
          <div className="search-input-wrapper">
            {(location.hash === "#/") ? <p>Find</p> : null}
            <input
              className="search search-bar"
              placeholder="local game stores, game cafes..."
              type="text"
            />
            <span>|</span>
            {(location.hash === "#/") ? <p>Near</p> : null}
            <input
              className="search search-bar"
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

export default withRouter(Search);
