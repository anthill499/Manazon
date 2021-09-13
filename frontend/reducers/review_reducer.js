import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from "../actions/review_actions";

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...action.reviews };
    case RECEIVE_REVIEW:
      return { ...state, [action.review.id]: action.review };
    case REMOVE_REVIEW:
      return { ...state, [action.review.id]: undefined };
    default:
      return state;
  }
};

export default reviewReducer;
