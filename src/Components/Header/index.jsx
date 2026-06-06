import imglogo from "../../assets/logo-name.png";
import imgperfil from "../../assets/icon-perfil.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed flex h-16 w-full items-center bg-amber-900">
      <Link to="/" className="ml-5">
        <img src={imglogo} className="h-12 w-auto" alt="logo donation compass" />
      </Link>

      <Link to="/" className="ml-4">
        <h1 className="text-3xl text-yellow-600">
          Donation Compass
        </h1>
      </Link>

      <Link to="/login" className="ml-auto mr-8">
        <img src={imgperfil} className="h-12 w-auto cursor-pointer" alt="icone perfil" />
      </Link>
    </header>
  );
}