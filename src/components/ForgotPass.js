import "../components/SignIn.css";
import { Link } from "react-router-dom";

function ForgotPass() {
  return (
    <>
      <div style={{marginTop: 180}} className="form-container">
        <h2>Forgoten password</h2>
        <p style={{marginTop: 15}}>Enter your email and you will receive a new password to your email.</p>
        <form>
          <input className="input" placeholder="Email" />
        <button>Reset Password</button>
        </form>
      </div>
    </>
  );
}

export default ForgotPass;
