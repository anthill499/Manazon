import { connect } from "react-redux";
import { fetchProducts } from "../../util/product_util";
import ProductImports from "./product_imports";

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => fetchProducts(),
});

export default connect(null, mapDispatchToProps)(ProductImports);
