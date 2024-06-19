import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logoName.png"
import { useUser } from "../../context/UserContext"
import ModalEdit from "../EduardoComponents/ModalEdit"

const NavBar = () => {
  const { user, setUser } = useUser()
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleLogout = () => {
    setUser(null) 
    navigate("/") 
  }

  const usuario = {
    id: 1,
    nome: {user},
    email: '',
    telefone: ' ',
    cpf: ' ',
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="navBar flex justify-between items-center p-[1rem]">
      <Link to="/Donations">
        <img className="h-16" src={logo} alt="logo" />
      </Link>
      <div className="menu flex gap-8">
        {user ? (
          <div className="relative">
            <button
              className="menuList text-[#6f6f6f] relative"
              onClick={toggleDropdown}
            >
              Olá, {user.email} &#9660;
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
               <li className="dropdown-item" onClick={handleOpenModal}>
                  Editar
                 </li>
               <li className="dropdown-item" onClick={handleLogout}>
                  Sair
                </li>
              </ul>
            )}
             <ModalEdit
            open={openModal}
            onClose={handleCloseModal}
            data={usuario}
      />
          </div>
        ) : (
          <>
            <li className="menuList text-[#6f6f6f] hover:text-orange-600">
              <Link to="/login">Login</Link>
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-orange-600">
              <Link to="/login">Register</Link>
            </li>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
