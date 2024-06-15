import logo from "../../assets/logoName.png"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[1rem]">
      <Link to="/Donations">
        <img className="h-16" src={logo} alt="logo" />
      </Link>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-orange-600">
          <Link to="/login">Login</Link>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-orange-600">
          <Link to="/login">Register</Link>
        </li>
      </div>
    </div>
  )
}

export default NavBar