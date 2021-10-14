import humps from "humps";
export const fetchCartItems = () =>
  $.ajax({
    method: "GET",
    url: "/api/cart_items",
  });

export const fetchCartItem = (cartItemId) =>
  $.ajax({
    url: `/api/cart_items/${cartItemId}`,
    method: "GET",
  });

export const createCartItem = (cartItem) => {
  const humpedCartItem = humps.decamelizeKeys(cartItem);
  return $.ajax({
    url: `/api/cart_items`,
    method: "POST",
    data: { cart_item: humpedCartItem },
  });
};

export const updateCartItem = (cartItem) => {
  const humpedCartItem = humps.decamelizeKeys(cartItem);
  console.log(cartItem);
  return $.ajax({
    url: `/api/cart_items/${cartItem.id}`,
    method: "PATCH",
    data: { cart_item: humpedCartItem },
  });
};

export const removeCartItem = (cartItem) =>
  $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${cartItem.id}`,
  });
