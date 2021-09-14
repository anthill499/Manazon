import { connect } from "react-redux";
import CartItemsIndex from "./cart_items_index";
import {
  fetchCartItem,
  fetchCartItems,
  createCartItem,
  deleteCartItem,
} from "../../actions/cart_items_actions";

const mSTP = (state) => ({
  cartItems: Object.values(state.entities.cartItems),
  currentUser: state.session.id,
  loggedIn: !!state.session.id,
});

const mDTP = (dispatch) => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
  fetchCartItem: (cartItem) => dispatch(fetchCartItem(cartItem)),
  createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
  deleteCartItem: (cartItem) => dispatch(deleteCartItem(cartItem)),
});

export default connect(mSTP, mDTP)(CartItemsIndex);
