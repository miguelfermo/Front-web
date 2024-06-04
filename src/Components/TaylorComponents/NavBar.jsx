import logo from "../../assets/logoName.png"

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <img className="h-16" src={logo} alt="logo" />
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-orange-600">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-orange-600">
          Register
        </li>
      </div>
    </div>
  )
}

export default NavBar
