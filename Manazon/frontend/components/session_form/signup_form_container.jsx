import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

<<<<<<< HEAD
=======
const mapStateToProps = (state) => ({
  formData: {
    fullName: "",
    username: "",
    email: "",
    password: "",
  },
});

>>>>>>> auth
const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(signup(formUser)),
});

<<<<<<< HEAD
export default connect(null, mapDispatchToProps)(SignUpForm);
=======
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
>>>>>>> auth
