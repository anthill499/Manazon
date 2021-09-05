import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import NavBar from "./nav_bar";

const mapStateToProps = (state) => ({
  searchData: { field: "" },
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
