import logo from "../../assets/logoName.png"
import SearchEdit from "./SearchEdit"
import imgperfil from "../../assets/iconPerfil.png"
import { Link } from 'react-router-dom';

export default function NavBarEdit(){
  return (
    <div className="navBar flex justify-between items-center searchDiv max-h-32	gap-2 bg-greyIsh rounded-[10px] p-[3rem]">
      <div className="logoDiv">
        <button>
        <Link to="/" className="link">
          <img className="h-16" src={logo} alt="logo" />
        </Link>
        </button>
      </div>
      <div>
        <SearchEdit />
      </div>
      <div className="menu flex gap-5">
      <div className="flex items-center justify-center mb-4">
        <Link to="/login" className="link">
            <img src={imgperfil} className='perfil' alt="icone perfil" />
        </Link>
        </div>
      </div>
    </div>
  )
}
