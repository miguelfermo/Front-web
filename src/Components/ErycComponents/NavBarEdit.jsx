import logo from "../../assets/logoName.png"
import SearchEdit from "./SearchEdit"

export default function NavBarEdit(){
  return (
    <div className="navBar flex justify-between items-center searchDiv max-h-32	gap-2 bg-greyIsh rounded-[10px] p-[3rem]">
      <div className="logoDiv">
        <img className="h-16" src={logo} alt="logo" />
      </div>
      <div>
        <SearchEdit />
      </div>
      <div className="menu flex gap-5">
        <li className="menuList text-[#6f6f6f] hover:text-orange-600">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-orange-600">
          Register
        </li>
      </div>
    </div>
  )
}