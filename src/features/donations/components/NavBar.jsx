import { useState, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "@/assets/logo-name.png"
import { useAuth } from "@/features/auth/hooks/useAuth"
import ModalEdit from "@/Components/EduardoComponents/ModalEdit"
import Button from "@/shared/ui/Button"

const NavBar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLogout = () => {
    logout()
    setIsDropdownOpen(false)
    navigate("/")
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((previousState) => !previousState)
  }

  const openEditModal = useCallback(() => {
    setIsEditModalOpen(true)
  }, [])

  const closeEditModal = useCallback(() => {
    setIsEditModalOpen(false)
  }, [])

  return (
    <div className="flex justify-between items-center p-4">
      <Link to="/Donations">
        <img className="h-16" src={logo} alt="logo" />
      </Link>
      <div className="flex gap-8">
        {user && user.name ? (
          <div className="relative">
            <Button
              className="text-gray-500 hover:text-gray-700 relative"
              onClick={toggleDropdown}
            >
              Olá, {user.name} ▼
            </Button>
            {isDropdownOpen && (
              <ul className="absolute top-full right-0 z-50 flex flex-col bg-white border border-gray-300 border-t-0 rounded-b-lg shadow-md p-2">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={openEditModal}
                >
                  Editar
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Sair
                </li>
              </ul>
            )}
            <ModalEdit
              open={isEditModalOpen}
              onClose={closeEditModal}
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
