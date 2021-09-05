import ProductIndex from "./product_index";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: (userId) => dispatch(logout(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
