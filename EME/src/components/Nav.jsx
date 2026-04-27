import "./css/Nav.css";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="nav-root">
      <label className="icon">EME</label>

      <div className="links-root">
        <Link to="/login" className="Login-link">Login</Link>
        <Link to="/register" className="Register-link">Register</Link>
        <Link to="/profile" className="Profile-link">Profile</Link>
      </div>
    </div>
  );
}