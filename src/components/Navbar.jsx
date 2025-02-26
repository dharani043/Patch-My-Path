// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Issue Tracker</Link>
      </div>
      <ul className="navbar-links">
        <li className='navLi'><Link to="/">Home</Link></li>
        <li className='navLi'><Link to="/signin">Sign In</Link></li>
        <li className='navLi'><Link to="/register">Register</Link></li>
        <li className='navLi'><Link to="/settings">Settings</Link></li>
        <li className='navLi'><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;