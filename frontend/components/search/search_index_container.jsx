import { connect } from "react-redux";
import SearchIndex from "./search_index";
import { fetchProducts } from "../../actions/products_actions";

const mapStateToProps = ({ entities: { products, cartItems } }, ownProps) => ({
  products: Object.values(products),
  cartItems: Object.values(cartItems),
  query: ownProps.match.params.query,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (query) => dispatch(fetchProducts(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
