import { connect } from "react-redux";
import { deleteReview } from "../../actions/review_actions";
import ReviewIndex from "./review_index";
import { withRouter } from "react-router";

const mSTP = ({ entities: { reviews, users }, session }) => ({
  reviews: Object.values(reviews),
  currentUserId: session.id,
  currentUser: users[session.id],
});

const mDTP = (dispatch) => ({
  deleteReview: (review, productId) =>
    dispatch(deleteReview(review, productId)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));
