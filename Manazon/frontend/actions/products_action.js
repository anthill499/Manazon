import * as ProductApiUtil from "../util/product_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const fetchProducts = () => (dispatch) => {
  ProductApiUtil.fetchProducts().then((products) => dispatch(fetchProducts()));
};

export const fetchProduct = (productId) => (dispatch) => {
  ProductApiUtil.fetchProduct(productId).then((product) =>
    dispatch(fetchProducts(product))
  );
};
