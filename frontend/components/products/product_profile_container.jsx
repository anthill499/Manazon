import ProductProfile from "./product_profile";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/products_actions";
import { fetchReviews } from "../../actions/review_actions";
import {
  createCartItem,
  updateCartItem,
  fetchCartItems,
} from "../../actions/cart_items_actions";
// import { createCartItem }
const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  loggedIn: !!state.session.id,
  reviews: Object.values(state.entities.reviews),
  currentUserId: state.session.id,
  allCarts: Object.values(state.entities.cartItems),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
  createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
  updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
  fetchCartItems: () => dispatch(fetchCartItems()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductProfile)
);
