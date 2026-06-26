import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back 👋</h1>

        <p>Login to continue shopping</p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
        />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>

          <a href="#">Forgot Password?</a>
        </div>

        <button>Login</button>

        <p className="register">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;