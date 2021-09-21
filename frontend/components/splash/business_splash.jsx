import React from "react";
import {Link} from "react-router-dom";

const BusinessSplash = ({ business }) => {
  return (
    <div className="bus-splash-wrapper">
      <img src={business.photoUrls[0]} className="bus-splash-pic" />
      <Link to={`/businesses/${business.id}`} className="bus-splash-link">{business.name}</Link>
      <p>{business.address}</p>
    </div>
  );
};

export default BusinessSplash;
