export const fetchProducts = () => {
  return $.ajax({
    url: "/api/products",
    method: "get",
  });
};

export const fetchSearchedProducts = (query) => {
  return $.ajax({
    url: "/api/search",
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
