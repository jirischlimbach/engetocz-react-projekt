import { NavLink } from "react-router-dom"

const Navbar = () => {

  return <nav>
    <NavLink to="/"><p>Domů</p></NavLink>
    <NavLink to="/create-qr"><p>QR generátor</p></NavLink>
  </nav>
}

export default Navbar