export const fetchProducts = (query) => {
  return $.ajax({
    url: "/api/products",
    method: "get",
    data: { query },
  });
};

export const fetchProduct = (productId) => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${productId}`,
  });
};
