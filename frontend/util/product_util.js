export const fetchProducts = () => {
  return $.ajax({
    url: "/api/products",
    method: "get",
  });
};

export const fetchProduct = (productId) => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${productId}`,
  });
};
