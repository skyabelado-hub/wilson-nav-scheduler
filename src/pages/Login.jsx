import "../styles/Login.css";

function Login({ goToRegister }) {
  return (
    <div className="login-container">

      <div className="login-box">

        <div className="login-logo">
          <img src="/logo.png" alt="WILSON" />
          <span>WILSON</span>
        </div>

        <h2>Welcome back</h2>

        <p className="subtitle">
          Sign in to open maps and appointments.
        </p>

        <form>

          <label>Email</label>
          <input
            type="email"
            placeholder="student@adnu.edu.ph"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••••"
          />

          <div className="login-buttons">

            <button
              type="submit"
              className="login1-btn"
            >
              Log In
            </button>

            <button
  type="button"
  className="register-btn"
  onClick={goToRegister}
>
  Create Account
</button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;