import { connect } from "react-redux";

import { createReview } from "../../actions/review_actions.js";
import CreateReviewForm from "./create_review_form";

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
});

const mDTP = (dispatch) => ({
  createReview: (review, productId) =>
    dispatch(createReview(review, productId)),
});

export default connect(mSTP, mDTP)(CreateReviewForm);
