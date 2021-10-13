import * as ProductApiUtil from "../util/product_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveProductIndex = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
  products,
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const fetchProducts = (query) => (dispatch) => {
  // debugger;
  return ProductApiUtil.fetchProducts(query).then((products) =>
    dispatch(receiveProductIndex(products))
  );
};

export const fetchProduct = (productId) => (dispatch) => {
  ProductApiUtil.fetchProduct(productId).then((product) =>
    dispatch(receiveProduct(product))
  );
};

// remember to pass store down
