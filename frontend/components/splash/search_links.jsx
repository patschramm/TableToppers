import React from "react";
import { Link } from "react-router-dom";

const SearchLinks = ({className}) => {
  return (
    <div className={`search-link-wrapper ${className}`}>
      <Link to="#">Fantasy</Link>
			<Link to="#">Live Games</Link>
			<Link to="#">Hobby Shops</Link>
    </div>
  );
};

export default SearchLinks;
