import ProductIndex from "./product_index";
import { connect } from "react-redux";
import { fetchProduct, fetchProducts } from "../../actions/products_actions";
const mapStateToProps = (state) => ({
  allProducts: Object.values(state.entities.products),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
