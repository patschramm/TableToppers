import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

{
  /* <span>{Array(Math.floor(business.rating)).fill(<MyStar></MyStar>)} </span>;

const MyStar = styled(StarIcon)({
  color: "#222222",
  width: "20px",
  backgroundColor: "transparent",
}); */
}
class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.avgStar = "";
    this.oneStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
      </div>
    );
    this.oneHalfStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star-half-alt str fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
      </div>
    );
    this.twoStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
      </div>
    );
    this.twoHalfStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star-half-alt str fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
      </div>
    );
    this.threeStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
      </div>
    );
    this.threeHalfStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star-half-alt str fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
      </div>
    );
    this.fourStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
      </div>
    );
    this.fourHalfStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i id="half-star" className="fas fa-star-half-alt str fa-xs"></i>
      </div>
    );
    this.fiveStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
      </div>
    );
  }

  componentDidMount() {
    console.log("business", this.props.business)
    this.props.fetchBusiness(this.props.match.params.id);
  }

  phone() {
    let phone = this.props.business.phone.slice
  }

  hours() {
    let hours = "";
    if (this.props.business.opening === 12) {
      hours += this.props.business.opening + ":00 - ";
    } else {
      hours += (this.props.business.opening % 12) + ":00 - ";
    }
    if (this.props.business.closing === 12) {
      hours += this.props.business.closing + ":00";
    } else {
      hours += (this.props.business.closing % 12) + ":00";
    }
    return hours;
  }

  render() {
    if (
      !this.props.business ||
      this.props.business === undefined ||
      this.props.business === null
    ) {
      return null;
    } else {
      console.log("in render", this.props.business)
      let url = `http://maps.google.com/?q=${this.props.business.address}`;
      let phone = '(' + this.props.business.phone.slice(0, 3) + ') ' + this.props.business.phone.slice(3, 6) + '-' + this.props.business.phone.slice(6);
      let rating = 0;
      if (!this.props.business.reviews) {
        rating = (5.0).toFixed(2);
      } else {
        let sum = 0;
        let avg = 0;

        for (let key in this.props.business.reviews) {
          let rating = this.props.business.reviews[key].rating;
          sum += rating;
        }
        let length = Object.keys(this.props.business.reviews).length;
        avg = sum / length;
        rating = avg.toFixed(2);
      }
      if (rating > 4.9) {
        this.avgStar = this.fiveStar;
      } else if (rating > 4.4 && rating <= 4.9) {
        this.avgStar = this.fourHalfStar;
      } else if (rating >= 4.0 && rating <= 4.4) {
        this.avgStar = this.fourStar;
      } else if (rating > 3.5 && rating < 4) {
        this.avgStar = this.threeHalfStar;
      } else if (rating >= 3 && rating <= 3.5) {
        this.avgStar = this.threeStar;
      } else if (rating > 2.5 && rating < 3) {
        this.avgStar = this.twoHalfStar;
      } else if (rating >= 2 && rating <= 2.5) {
        this.avgStar = this.twoStar;
      } else if (rating > 1.5 && rating < 2) {
        this.avgStar = this.oneHalfStar;
      } else {
        this.avgStar = this.oneStar;
      }
      if (this.props.business.photoUrls == null) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="business-wrapper">
            <nav>
              <NavbarContainer />
            </nav>
            <div className="business-header">
              <div className="business-header-photos">
                {this.props.business.photoUrls.map((url) => {
                  return <img src={url} className="bh-photo" />;
                })}
              </div>
              <div className="bh-info-wrapper">
                <div className="bh-info">
                  <h1 className="business-header-title">
                    {this.props.business.name}
                  </h1>
                  <div className="business-header-rating">{this.avgStar}</div>
                  <div className="business-header-categories">
                    {/* {this.props.business.categories.map((category, i) => {
                      if (i !== this.props.business.categories.length - 1) {
                        return category + ", ";
                      } else {
                        return category;
                      }
                    })} */}
                  </div>
                  <div className="business-header-price">
                    {this.props.business.price_range}
                  </div>
                  <div className="business-header-hours">
                    Today: {this.hours()}
                  </div>
                </div>
                <div className="business-header-photos-bttn">See Photos</div>
              </div>
            </div>
            <div className="business-body">
              <div className="business-body-review-button">
                
                {this.props.user ? <Link
                  to={`/businesses/${this.props.business.id}/createreview`}
                  className="create-review-button"
                >
                  Write a Review
                </Link> : null}
              </div>
              <div className="business-body-cats">
                <span className="dollar-sign">
                  {this.props.business.price_range}
                </span>
              </div>
              <div className="business-body-main">
                <div className="bus-loc-hours">
                  <h4 className="loc-hours-title">Location & Hours</h4>
                  <div className="business-body-hours">
                    <div className="hours-day"> Sun {this.hours()}, </div>
                    <div className="hours-day"> Mon {this.hours()}, </div>
                    <div className="hours-day"> Tue {this.hours()}, </div>
                    <div className="hours-day"> Wed {this.hours()}, </div>
                    <div className="hours-day"> Thu {this.hours()}, </div>
                    <div className="hours-day"> Fri {this.hours()}, </div>
                    <div className="hours-day"> Sat {this.hours()} </div>
                  </div>
                  <div className="bus-body-info">
                    <ul>
                      <li>
                        <p className="side-info-phone">{phone}</p>
                        <i className="fas fa-phone-volume"></i>
                      </li>
                      <li>
                        <a
                          className="side-info"
                          href={"http://" + this.props.business.website}
                          target="_blank"
                        >
                          {this.props.business.website}
                        </a>
                        <i className="fas fa-external-link-square-alt"></i>
                      </li>
                      <li>
                        <div className="side-info-dir">
                          <a href={url} target="_blank">
                            {" "}
                            Get Directions{" "}
                          </a>
                          <p className="side-info-address">
                            {this.props.business.address},{" "}
                            {this.props.business.city},{" "}
                            {this.props.business.state}{" "}
                            {this.props.business.zip_code}
                          </p>
                        </div>
                        <i className="fas fa-directions"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="business-body-reviews"></div>
            </div>
            <footer>
              <div className="mylinks">
                <p className="about-user-title">About</p>
                <a
                  href="https://www.linkedin.com/in/patrick-schramm-a54426216/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <a href="https://github.com/patschramm" target="_blank">
                  {" "}
                  Git Hub
                </a>
                <a href="https://angel.co/u/patrick-schramm-2" target="_blank">
                  {" "}
                  Angel List
                </a>
                <a href="" target="_blank">
                  {" "}
                  About Me
                </a>
              </div>
            </footer>
          </div>
        );
      }
    }
  }
}

export default BusinessShow;
