import "../components/SignIn.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div style={{marginTop: 180}} className="form-container">
        <h2>Register</h2>
        <p style={{marginTop: 15}}>Signing up gives you access to our packages and special discount opportunities.</p>
        <form>
          <div className="name-container">  
            <input className="input" placeholder="First Name" />
            <input className="input" placeholder="Last Name" />
          </div>
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Password" />
        <button>Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
