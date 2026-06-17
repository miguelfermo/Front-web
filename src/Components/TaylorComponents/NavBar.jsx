import { useState, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logo-name.png"
import { useUser } from "../../context/UserContext"
import ModalEdit from "../EduardoComponents/ModalEdit"

const NavBar = () => {
  const { user, setUser } = useUser()
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleLogout = () => {
    setUser(null)
    setDropdownOpen(false)
    navigate("/")
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleOpenModal = useCallback(() => {
    setOpenModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setOpenModal(false)
  }, [])

  return (
    <div className="flex justify-between items-center p-4">
      <Link to="/Donations">
        <img className="h-16" src={logo} alt="logo" />
      </Link>
      <div className="flex gap-8">
        {user && user.name ? (
          <div className="relative">
            <button
              className="text-gray-500 hover:text-gray-700 relative"
              onClick={toggleDropdown}
            >
              Olá, {user.name} ▼
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full right-0 z-50 flex flex-col bg-white border border-gray-300 border-t-0 rounded-b-lg shadow-md p-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleOpenModal}>
                  Editar
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                  Sair
                </li>
              </ul>
            )}
            <ModalEdit
              open={openModal}
              onClose={handleCloseModal}
              data={user}
            />
          </div>
        ) : (
          <>
            <li className="text-gray-500 hover:text-orange-600 list-none cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-gray-500 hover:text-orange-600 list-none cursor-pointer">
              <Link to="/login">Register</Link>
            </li>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
