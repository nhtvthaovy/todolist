import "../styles/Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserTie,
  faUserTag,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-logo"></div>

        <form className="register-form-box">
          <h1 className="register-form-title">Sign Up</h1>

          <div className="register-form-group">
            <div className="register-input-wrapper">
              <span className="register-input-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input type="text" className="register-input" placeholder="Enter First Name" />
            </div>
          </div>

          <div className="register-form-group">
            <div className="register-input-wrapper">
              <span className="register-input-icon">
                <FontAwesomeIcon icon={faUserTie} />
              </span>
              <input type="text" className="register-input" placeholder="Enter Last Name" />
            </div>
          </div>

          <div className="register-form-group">
            <div className="register-input-wrapper">
              <span className="register-input-icon">
                <FontAwesomeIcon icon={faUserTag} />
              </span>
              <input type="text" className="register-input" placeholder="Enter Username" />
            </div>
          </div>

          <div className="register-form-group">
            <div className="register-input-wrapper">
              <span className="register-input-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input type="email" className="register-input" placeholder="Enter Email" />
            </div>
          </div>

          <div className="register-form-group">
            <div className="register-input-wrapper">
              <span className="register-input-icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input type="password" className="register-input" placeholder="Enter Password" />
            </div>
          </div>

          <div className="register-form-group">
            <div className="register-input-wrapper">
              <span className="register-input-icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                className="register-input"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="register-form-group flex items-center gap-2">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree" className="text-sm">
              I agree to all terms
            </label>
          </div>

          <button type="submit" className="register-button bg-red-300 hover:bg-red-400">
            Register
          </button>

          <p className="text-sm mt-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-500">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
