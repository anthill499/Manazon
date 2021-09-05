import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mapStateToProps = (state) => ({
  formData: {
    fullName: "",
    username: "",
    email: "",
    password: "",
  },
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(signup(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
