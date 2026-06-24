import "../styles/Login.css";

function Login({ goBack }) {
  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button className="signin-btn">
          Sign In
        </button>

        <button
          className="back-btn"
          onClick={goBack}
        >
          Back
        </button>

      </div>

    </div>
  );
}

export default Login;