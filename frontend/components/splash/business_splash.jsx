import React from "react";

const BusinessSplash = ({ business }) => {
  return (
    <div className="bus-splash-wrapper">
      <p>{business.name}</p>
      <p>{business.address}</p>
    </div>
  );
};

export default BusinessSplash;
