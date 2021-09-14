import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews: reviews,
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review: review,
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId: reviewId,
});

export const fetchReviews = (productId) => (dispatch) => {
  return ReviewApiUtil.fetchReviews(productId).then((res) =>
    dispatch(receiveReviews(res))
  );
};

export const fetchReview = (reviewId) => (dispatch) => {
  return ReviewApiUtil.fetchReview(reviewId).then((res) =>
    dispatch(receiveReview(res))
  );
};

export const createReview = (review, productId) => (dispatch) => {
  return ReviewApiUtil.createReview(review, productId).then((res) =>
    dispatch(receiveReview(res))
  );
};

export const updateReview = (review, productId) => (dispatch) => {
  return ReviewApiUtil.updateReview(review, productId).then((res) =>
    dispatch(receiveReview(res))
  );
};

export const deleteReview = (review, productId) => (dispatch) =>
  ReviewApiUtil.deleteReview(review, productId).then(() =>
    dispatch(removeReview(review.id))
  );
