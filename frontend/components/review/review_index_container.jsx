import { connect } from "react-redux";
import ReviewsIndex from "./review_index";
import { fetchReviews } from "../../actions/review_actions"

const mSTP = (state) => {
  const reviews = state.entities.reviews;
  return {
    reviews,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchReviews: (businessId) => {
      return dispatch(fetchReviews(businessId));
    },
  };
};

export default connect(mSTP, mDTP)(ReviewsIndex);
