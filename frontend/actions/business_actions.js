import * as BusinessApiUtil from "../util/business_api_util";

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

export const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business,
});

export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});

export const fetchBusiness = (businessId) => (dispatch) => {
  return BusinessApiUtil.fetchBusiness(businessId).then((business) => {
    return dispatch(receiveBusiness(business));
  });
};

export const fetchBusinesses = () => (dispatch) => {
  return BusinessApiUtil.fetchBusinesses().then((businesses) => {
    return dispatch(receiveBusinesses(businesses));
  });
};
