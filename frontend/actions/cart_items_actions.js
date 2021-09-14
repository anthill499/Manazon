import * as CartItemApiUtil from "../util/cart_items_util";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveAllCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
});

const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem,
});

const removeCartItem = (cartItem) => ({
  type: REMOVE_CART_ITEM,
  cartItemId: cartItem.id,
});

export const fetchCartItems = () => (dispatch) =>
  CartItemApiUtil.fetchCartItems().then((cartItems) =>
    dispatch(receiveAllCartItems(cartItems))
  );

export const fetchCartItem = (cartItemId) => (dispatch) =>
  CartItemApiUtil.fetchCartItem(cartItemId).then((cartItem) =>
    dispatch(receiveCartItem(cartItem))
  );

export const createCartItem = (cartItem) => (dispatch) =>
  CartItemApiUtil.createCartItem(cartItem).then((cartItem) =>
    dispatch(receiveCartItem(cartItem))
  );

export const updateCartItem = (cartItem) => (dispatch) =>
  CartItemApiUtil.updateCartItem(cartItem).then((cartItem) =>
    dispatch(receiveCartItem(cartItem))
  );

export const deleteCartItem = (cartItem) => (dispatch) =>
  CartItemApiUtil.destroyCartItem(cartItem).then((cartItem) =>
    dispatch(removeCartItem(cartItem))
  );
