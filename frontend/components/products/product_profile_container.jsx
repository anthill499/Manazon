import ProductProfile from "./product_profile";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/products_actions";
import { fetchReviews } from "../../actions/review_actions";
const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  loggedIn: !!state.session.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductProfile)
);
