
import React from "react";
import { Link } from "react-router-dom";
import ReviewShow from "./review_show";

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   this.props.fetchReviews(this.props.business.id);
  // }

  // componentDidUpdate() {
  //   console.log("review", this.props.reviews
  //   )
  //   if (
  //     this.props.business.reviews.length !==
  //     Object.keys(this.props.reviews).length
  //   ) {
  //     this.props.fetchReviews(this.props.business.id);
  //   }
  // }

  render() {
    console.log(this.props.reviews)
    if (this.props.reviews) {
      return (
        <div className="reviews-container">
          <ul>
            {Object.values(this.props.reviews).map((review) => {
              return (
                <li key={review.id}>
                  <ReviewShow review={review} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ReviewsIndex;