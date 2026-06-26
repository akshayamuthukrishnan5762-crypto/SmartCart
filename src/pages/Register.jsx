import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Enter Name"
        />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;