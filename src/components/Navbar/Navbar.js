import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

  return <nav>
    <Link to="/"><h2>QR generátor</h2></Link>
    <div className="nav-links">
      <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : "nonactiveLink"}><p>Domů</p></NavLink>
      <NavLink to="/create-qr" className={({ isActive }) => isActive ? "activeLink" : "nonactiveLink"}><p>QR generátor</p></NavLink>
    </div>
  </nav>
}

export default Navbar