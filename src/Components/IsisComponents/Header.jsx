import  './header.css'
import '../../index.css'
import imglogo from "../../assets/logoName.png"
import imgperfil from "../../assets/iconPerfil.png"

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