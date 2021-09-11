import ProductProfile from "./product_profile";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/products_actions";
const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
});

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductProfile)
);
