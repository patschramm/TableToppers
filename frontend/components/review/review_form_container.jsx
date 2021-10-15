import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";
import Rating from "react-simple-star-rating";

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(mSTP, mDTP)(ReviewForm);