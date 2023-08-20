import "../components/SignIn.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div style={{marginTop: 180}} className="form-container">
        <h2>Login</h2>
        <p style={{marginTop: 15}}>Already our user? Use your email and password to sign in.</p>
        <form>
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Password" />
          <div className="remember-container">
            <input className="check-box" type="checkbox" id="remember" name="remember" value="remember" />
            <label style={{marginLeft: 10}} for="remember"> Remember me</label>          
        </div>
        <button>Sign In</button>
          <div className="ExtraContainer">
            <Link to="/new"><p>Forgot password?</p></Link>
            <Link to="/new"><p>Don't have an account? Sign up</p></Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
