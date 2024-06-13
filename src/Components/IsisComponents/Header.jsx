import  './header.css'
import '../../index.css'
import imglogo from "../../assets/logoName.png"
import imgperfil from "../../assets/iconPerfil.png"
import { Link } from 'react-router-dom';

function HeaderDN() {
  return (
    <>
        <header className='header'> 
          <Link to="/">
              <img src={imglogo} className='logo' alt="logo donation compass" />
            </Link>
            <Link to="/">
              <p className='nome'>Donation Compass</p>
            </Link>
          <Link to="/login" className="link">
            <img src={imgperfil} className='perfil' alt="icone perfil" />
          </Link>
        </header>
    </>
  );
}

export default HeaderDN;