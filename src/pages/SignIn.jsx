// src/pages/SignIn.jsx
const SignIn = () => {
    return (
      <div className="auth-page">
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    );
  };
  
  export default SignIn;