import imglogo from "../../assets/logoName.png"
import imgperfil from "../../assets/iconPerfil.png"
import { Link } from 'react-router-dom';

function HeaderDN() {
  return (
    <header className='fixed top-0 w-full h-16 bg-brown z-10 flex items-center justify-start shadow-md'> 
      <Link to="/" className="flex items-center gap-4">
        <img src={imglogo} className='w-15 h-14 ml-5' alt="logo donation compass" />
        <p className='font-farmhouse text-4xl text-orange-primary'>Donation Compass</p>
      </Link>
      <Link to="/login" className="absolute right-8 top-1/2 -translate-y-1/2">
        <img src={imgperfil} className='w-11 h-11 cursor-pointer' alt="icone perfil" />
      </Link>
    </header>
  );
}

export default HeaderDN;