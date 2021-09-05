import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => ({
  formData: {
    email: "",
    password: "",
  },
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
