import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = ({ errors }) => ({
  formData: {
    email: "",
    password: "",
  },
  errors: errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(login(formUser)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
