import React from "react";
import { Link } from "react-router-dom";

const SearchLinks = () => {
  return (
    <div className="search-link-wrapper">
      <Link>Fantasy</Link>
			<Link>Live Games</Link>
			<Link>Hobby Shops</Link>
    </div>
  );
};

export default SearchLinks;
