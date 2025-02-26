// src/pages/Register.jsx
const Register = () => {
    return (
      <div className="auth-page">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
      </div>
    );
  };
  
  export default Register;