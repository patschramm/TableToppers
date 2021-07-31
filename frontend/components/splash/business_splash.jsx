import React from "react";
import {Link} from "react-router-dom";

const BusinessSplash = ({ business }) => {
  return (
    <div className="bus-splash-wrapper">
      <Link to={`/businesses/${business.id}`}>{business.name}</Link>
      <p>{business.address}</p>
    </div>
  );
};

export default BusinessSplash;
