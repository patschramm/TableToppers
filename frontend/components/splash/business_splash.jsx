import React from "react";
import {Link} from "react-router-dom";

const BusinessSplash = ({ business }) => {
  return (
    <div className="bus-splash-wrapper">
      <img src={business.photoUrls[0]} className="bus-splash-pic" />
      <div className="bus-splash-info">
        <Link to={`/businesses/${business.id}`} className="bus-splash-link">{business.name}</Link>
        <p>{business.address}</p>
      </div>
    </div>
  );
};

export default BusinessSplash;
