import  './header.css'
import './index.css'
import imglogo from './Midia/Logo/logo.png'
import imgperfil from './Midia/icon perfil.png'

function HeaderDN() {
  return (
    <>
        <header className='header'> 
          <img src={imglogo} className='logo' alt="logo donation compass" />
          <p className='nome'>Donation Compass</p>
          <img src={imgperfil} className='perfil' alt="icone perfil" />
        </header>
    </>
  );
}

export default HeaderDN;