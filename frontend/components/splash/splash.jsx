import React, { useEffect, useState } from "react";
import NavbarContainer from "../navbar/navbar_container";
import { connect } from "react-redux";
import Search from "../search/search";
import SearchLinks from "./search_links";
import { fetchBusinesses } from "../../actions/business_actions";
import BusinessSplash from "./business_splash";
import Footer from "../footer/footer";

const mSTP = (state) => ({
  businesses: state.entities.businesses
    ? Object.values(state.entities.businesses)
    : [],
});

const mDTP = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
});

const Splash = ({ businesses, fetchBusinesses }) => {
  const [businessList, setBusinesses] = useState([]);

  useEffect(() => {
    fetchBusinesses().then((data) => {
      setBusinesses(businessList.concat(Object.values(data.businesses)));
    });
  }, businessList);

  const randomBusinesses = () => {
    let random = [];

    while (random.length < 3) { //
      let i = Math.floor(Math.random() * businessList.length);
      const currItem = businessList[i];
      if (!random.includes(currItem)) {
        random.push(currItem);
      }
    }

    return random;
  };

  if (businessList.length < 1) {
    return null;
  } else {
    const randBus = randomBusinesses();
    return (
      <>
        <header className="splash-header">
          <div className="overlay"></div>
          <div className="splash-header-photo"></div>
          <div className="splash-wrapper">
            <NavbarContainer />
          </div>
          <h1>
            <a href="/" className="splash-title">
              TableToppers
            </a>
          </h1>
          <Search />
          <SearchLinks className="main" />
        </header>

        <div className="splash-main">
          <h1>TableToppers Portland</h1>

          <SearchLinks className="splash-main-links" />

          <h1>Hot & New Businesses</h1>
          <div className="hot-splash-wrapper">
            {randBus.map((business, i) => {
              return <BusinessSplash key={`business-${i}`} business={business} />;
            })}
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </>
    );
  }
};

export default connect(mSTP, mDTP)(Splash);
