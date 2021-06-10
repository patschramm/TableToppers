import React from "react";

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.avgStar = "";
    this.oneStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
      </div>
    );
    this.oneHalfStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
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
        <i className="fas fa-star str fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
        <i className="far fa-star str-g fa-xs"></i>
      </div>
    );
    this.twoHalfStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-xs"></i>
        <i className="fas fa-star str fa-xs"></i>
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
        <i className="fas fa-star str fa-xs"></i>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.id);
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
      if (!this.props.business) {
          return null;
      }


    // let rating = 0;
    // if (this.props.business.reviews.length === 0) {
    //   rating = (5.0).toFixed(2);
    // } else {
    //   let sum = 0;
    //   let avg = 0;
    //   for (let i = 0; i < this.props.business.reviews.length; i++) {
    //     sum += this.props.business.reviews[i].rating;
    //   }
    //   avg = sum / this.props.business.reviews.length;
    //   rating = avg.toFixed(2);
    // }
    // if (rating > 4.9) {
    //   this.avgStar = this.fiveStar;
    // } else if (rating > 4.4 && rating <= 4.9) {
    //   this.avgStar = this.fourHalfStar;
    // } else if (rating >= 4.0 && rating <= 4.4) {
    //   this.avgStar = this.fourStar;
    // } else if (rating > 3.5 && rating < 4) {
    //   this.avgStar = this.threeHalfStar;
    // } else if (rating >= 3 && rating <= 3.5) {
    //   this.avgStar = this.threeStar;
    // } else if (rating > 2.5 && rating < 3) {
    //   this.avgStar = this.twoHalfStar;
    // } else if (rating >= 2 && rating <= 2.5) {
    //   this.avgStar = this.twoStar;
    // } else if (rating > 1.5 && rating < 2) {
    //   this.avgStar = this.oneHalfStar;
    // } else {
    //   this.avgStar = this.oneStar;
    // }
    
    return (
      <div className="business-wrapper">
        <div className="business-header">
          <div className="business-header-bg"></div>
          <div className="business-header-title">
            {this.props.business.name}
          </div>
          <div className="business-header-rating">{/* {this.avgStar} */}</div>
          <div className="business-header-hours">{this.hours()}</div>
          <div className="business-header-photo-bttn"></div>
        </div>
        <div className="business-body">
          <div className="business-body-cats">
            <span className="dollar-sign">
              {this.props.business.price_range}
            </span>
          </div>
          <div className="business-body-map-hours">
            <div className="business-body-map"></div>
            <div className="business-body-hours">
                Sunday: {this.hours()},
                Monday: {this.hours()},
                Tuesday: {this.hours()},
                Wednesday: {this.hours()},
                Thursday: {this.hours()},
                Friday: {this.hours()},
                Saturday: {this.hours()}
            </div>
          </div>
          <div className="business-body-reviews"></div>
        </div>
      </div>
    );
  }
}

export default BusinessShow;
