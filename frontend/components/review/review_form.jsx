import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import NavbarContainer from "../navbar/navbar_container"


class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: "",
      rating: null,
      business_id: null,
      user_id: this.props.currentUser
    };
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // businessExists(id) {
  //   const {businesses} = this.props;
  //   for (let business in businesses) {
  //     if (business.id === id) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  componentDidMount() {
    let location = this.props.location.pathname.slice(12);
    let endIdx = location.indexOf("/")
    let id = parseInt(location.slice(0, endIdx));

    if (!(id in this.props.businesses)) {
      this.props.fetchBusiness(id).then(res => {
        this.setState({
          business_id: res.business.id
        })
      })
    } else {
      this.setState({
        business_id: id
      })
    }
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  handleRating(n) {
    let rating = {rating:n};
    this.setState(rating);
  }

  render() { 
    console.log("this a thing", this.state)

    if (this.state.business_id === null) {
      return null;
    } else {
      const business = this.props.businesses[this.state.business_id];
  
      return ( 
        <div className="review-form-container">
          <nav className="review-form-navbar"><NavbarContainer /></nav>
          <div className="review-business-header-wrapper">
            <Link to={`/businesses/${business.id}`} className="review-business-header">{business.name}</Link>
          </div>
          <form onSubmit={this.handleSubmit} className="review-form">
            <div className="review-form-wrapper">
              <div className="review-rating-wrapper">
                <Rating 
                  onClick={this.handleRating}
                  ratingValue={this.state.rating}
                  size={24}
                  fillColor="#23d3d3"
                  emptyColor="gray"
                  className="review-rating"
                />
              </div>
              <div className="review-message-wrapper">
                <textarea 
                cols="60" 
                rows="20" 
                className="message-body" 
                placeholder="This store is great/horrible! I sure did love/hate the way they treated me. Such a neat/dissapointing game store! I would absolutely/never recommend this business to a friend..."
                ></textarea>
              </div>
            </div>
            <button className="review-form-submit" type="submit">Post Review</button>
          </form>
        </div>
       );
    }
  }
}
 
export default ReviewForm;