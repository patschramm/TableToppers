import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW_ERRORS,
  REMOVE_REVIEW,
} from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      const newState = Object.assign({}, state);
      delete newState[action.review.id];
      return newState;
    case RECEIVE_REVIEW_ERRORS:

    default:
      return state;
  }
};

export default reviewsReducer;
