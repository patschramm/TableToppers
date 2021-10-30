import React from "react";

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stars;
    switch (this.props.review.rating) {
      case 5:
        stars = (
          <p>
            <i className="fas fa-star str fa-xs"></i>
            <i className="fas fa-star str fa-xs"></i>
            <i className="fas fa-star str fa-xs"></i>
            <i className="fas fa-star str fa-xs"></i>
            <i className="fas fa-star str fa-xs"></i>
          </p>
        );
        break;
      case 4:
        stars = (
          <p>
            <i className="fas fa-star str fa-xs"></i>
            <i className="fas fa-star str fa-xs"></i>
            <i className="fas fa-star str fa-xs"></i>
            <i className="fas fa-star str fa-xs"></i>
            <i id="empty-star" className="far fa-star str-g fa-xs"></i>
          </p>
        );
        break;
      case 3:
        stars = (
          <p>
            <i className="fas fa-star str fa-xs"></i>
            <i className="fas fa-star str fa-xs"></i>
            <i className="fas fa-star str fa-xs"></i>
            <i id="empty-star" className="far fa-star str-g fa-xs"></i>
            <i id="empty-star" className="far fa-star str-g fa-xs"></i>
          </p>
        );
        break;
      case 2:
        stars = (
          <p>
            <i className="fas fa-star str fa-xs"></i>
            <i className="fas fa-star str fa-xs"></i>
            <i id="empty-star" className="far fa-star str-g fa-xs"></i>
            <i id="empty-star" className="far fa-star str-g fa-xs"></i>
            <i id="empty-star" className="far fa-star str-g fa-xs"></i>
          </p>
        );
        break;
      case 1:
        stars = (
          <p>
            <i className="fas fa-star str fa-xs"></i>
            <i id="empty-star" className="far fa-star str-g fa-xs"></i>
            <i id="empty-star" className="far fa-star str-g fa-xs"></i>
            <i id="empty-star" className="far fa-star str-g fa-xs"></i>
            <i id="empty-star" className="far fa-star str-g fa-xs"></i>
          </p>
        );
        break;
      default:
    }

    const date = new Date(this.props.review.created_at);
    const fullDate =
      date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

    return (
      <div className="review-show">
        <div className="user-info">
          <i id="profile-pic" className="far fa-user"></i>
          <div className="review-username">
            {this.props.review.username}
          </div>
        </div>

        <div className="review-show-body">
          <div className="review-stars">
            {stars}
            <p className="review-date">{fullDate}</p>
          </div>
          <p className="review-message">{this.props.review.message}</p>
        </div>
      </div>
    );
  }
}

export default ReviewShow;
