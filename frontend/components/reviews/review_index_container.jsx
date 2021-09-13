import { connect } from "react-redux";
import { fetchReviews, createReview } from "../../actions/review_actions";
import { findUser } from "../../actions/session_actions";
import ReviewIndex from "./review_index";

const mSTP = ({ entities: { reviews, users }, session }) => ({
  reviews: Object.values(reviews),
  currentUserId: session.id,
  currentUser: reviews[session.id],
});

const mDTP = (dispatch) => ({
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
  createReview: (review, productId) =>
    dispatch(createReview(review, productId)),
  findUser: (userId) => dispatch(findUser(userId)),
});

export default connect(mSTP, mDTP)(ReviewIndex);
