import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

<<<<<<< HEAD:Manazon/frontend/components/session_form/signup_form_container.jsx
<<<<<<< HEAD
=======
const mapStateToProps = (state) => ({
=======
const mapStateToProps = ({ errors }) => ({
>>>>>>> master:frontend/components/session_form/signup_form_container.jsx
  formData: {
    fullName: "",
    username: "",
    email: "",
    password: "",
  },
  errors: errors.session,
});
<<<<<<< HEAD:Manazon/frontend/components/session_form/signup_form_container.jsx

>>>>>>> auth
=======
>>>>>>> master:frontend/components/session_form/signup_form_container.jsx
const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(signup(formUser)),
  clearErrors: () => dispatch(clearErrors()),
});

<<<<<<< HEAD
export default connect(null, mapDispatchToProps)(SignUpForm);
=======
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
>>>>>>> auth
