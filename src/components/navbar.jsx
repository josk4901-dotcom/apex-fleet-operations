import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        NAIROBI LABEL
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/products" className="nav-shop">
        Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;