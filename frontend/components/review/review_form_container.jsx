import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";
import ReviewForm from "./review_form";


const mSTP = ({ session, entities: { users, businesses } }) => {
  return {
    currentUser: users[session.id],
    businesses: businesses
  };
};

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchBusiness: (id) => dispatch(fetchBusiness(id))
});

export default connect(mSTP, mDTP)(ReviewForm);