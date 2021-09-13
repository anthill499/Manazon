import ProductIndex from "./product_index";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchProduct, fetchProducts } from "../../actions/products_actions";
const mapStateToProps = (state) => ({
  allProducts: Object.values(state.entities.products),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductIndex)
);
