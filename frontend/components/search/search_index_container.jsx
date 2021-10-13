import { connect } from "react-redux";
import SearchIndex from "./search_index";
import { fetchProducts } from "../../actions/products_actions";

const mapStateToProps = ({ session, entities: { products } }) => ({
  products: Object.values(products),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (query) => dispatch(fetchProducts(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
