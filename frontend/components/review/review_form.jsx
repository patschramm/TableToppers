import React, { Component } from "react";
import Rating from "react-simple-star-rating";


class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: "",
      rating: null,
      business_id: null,
      user_id: this.props.currentUser
    };
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

  render() { 
    console.log("this a thing", this.state)

    if (this.state.business_id === null) {
      return null;
    } else {
      const business = this.props.businesses[this.state.business_id];
  
      return ( 
        <div className="review-form-container">
          <h1 className="review-business-header">{business.name}</h1>
          <form onSubmit={this.handleSubmit} className="review-form">
            <div className="review-message-wrapper">
              <textarea cols="30" rows="10" className="message-body"></textarea>
            </div>
          </form>
        </div>
       );
    }
  }
}
 
export default ReviewForm;