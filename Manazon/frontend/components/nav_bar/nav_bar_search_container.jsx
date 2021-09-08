import NavBarSearch from "./nav_bar_search";
import { connect } from "react-redux";

const mapStateToProps = ({ session, entities: { users } }) => ({
  formData: { query: "" },
  currentUser: users[session.id],
});

const mapDispatchToProps = (dispatch) => ({
  // querying function here
  logout: (userId) => dispatch(logout(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSearch);
