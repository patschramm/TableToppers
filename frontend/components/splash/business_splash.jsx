import React from "react";
import {NavLink} from "react-router-dom";

const BusinessSplash = ({ business }) => {
  return (
    <div className="bus-splash-wrapper">
      <img src={business.photoUrls[0]} className="bus-splash-pic" />
      <div className="bus-splash-info">
        <NavLink to={`/businesses/${business.id}`} className="bus-splash-link">{business.name}</NavLink>
        <p>{business.address}</p>
      </div>
    </div>
  );
};

export default BusinessSplash;
