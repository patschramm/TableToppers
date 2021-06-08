import {
  RECEIVE_BUSINESS,
  RECEIVE_BUSINESSES,
} from "../actions/business_actions";

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, {
        [action.business.id]: action.business,
      });
    default:
      return state;
  }
};
export default BusinessesReducer;
