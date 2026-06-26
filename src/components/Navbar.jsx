import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">🛒 SmartCart</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
        <Link to="/cart">
          Cart <span className="badge">{cartCount}</span>
        </Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;