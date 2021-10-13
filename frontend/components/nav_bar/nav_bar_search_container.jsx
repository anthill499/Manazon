import NavBarSearch from "./nav_bar_search";
import { connect } from "react-redux";
import { fetchCartItems } from "../../actions/cart_items_actions";
import { withRouter } from "react-router-dom";
import { fetchProducts } from "../../actions/products_actions";
const mapStateToProps = (
  { session, entities: { users, cartItems, products } },
  ownProps
) => ({
  currentUser: users[session.id],
  allCartItems: Object.values(cartItems),
  ProductIndex: Object.values(products),
});

const mapDispatchToProps = (dispatch) => ({
  // querying function here
  logout: (userId) => dispatch(logout(userId)),
  fetchCartItems: () => dispatch(fetchCartItems()),
  fetchProducts: (query) => dispatch(fetchProducts(query)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavBarSearch)
);
