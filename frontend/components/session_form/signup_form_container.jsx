import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mapStateToProps = ({ errors }) => ({
  formData: {
    fullName: "",
    username: "",
    email: "",
    password: "",
  },
  errors: errors.session,
});
const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(signup(formUser)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
