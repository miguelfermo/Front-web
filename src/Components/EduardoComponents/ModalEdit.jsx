import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import { readStorage, writeStorage } from "../../shared/storage/localStorage"

const emptyUser = {
  name: "",
  email: "",
  telefone: "",
  cpf: "",
  password: "",
}

const ModalEdit = ({ open, onClose, data }) => {
  const { setUser } = useUser()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(data || emptyUser)
  const [formErrors, setFormErrors] = useState({})
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false)

  useEffect(() => {
    setFormData(data || emptyUser)
    setFormErrors({})
    setIsDeleteConfirmationOpen(false)
  }, [data])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((previousData) => ({ ...previousData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.telefone || !formData.cpf || !formData.password) {
      setFormErrors({ message: "Preencha todos os campos." })
      return
    }

    const users = readStorage("users", [])
    const updatedUsers = users.map((user) =>
      user.email === data?.email ? { ...user, ...formData } : user
    )

    writeStorage("users", updatedUsers)
    setUser(formData)
    onClose()
  }

  const handleDeleteUser = () => {
    setIsDeleteConfirmationOpen(true)
    setFormErrors({ message: "Confirme a exclusao do cadastro." })
  }

  const confirmDeleteUser = () => {
    const users = readStorage("users", [])
    const updatedUsers = users.filter((user) => user.email !== formData.email)

    writeStorage("users", updatedUsers)
    setUser(null)
    navigate("/login")
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-6">Editar Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="tel"
            placeholder="Telefone"
            name="telefone"
            value={formData.telefone || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            value={formData.cpf || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          {formErrors.message && (
            <div className="text-red-500 mb-4">{formErrors.message}</div>
          )}
          {!isDeleteConfirmationOpen ? (
            <div className="flex gap-4 justify-center mt-6">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Salvar
              </button>
              <button
                type="button"
                onClick={handleDeleteUser}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Excluir Cadastro
              </button>
            </div>
          ) : (
            <div className="flex gap-4 justify-center mt-4">
              <button
                type="button"
                onClick={confirmDeleteUser}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Confirmar exclusao
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsDeleteConfirmationOpen(false)
                  setFormErrors({})
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Cancelar
              </button>
            </div>
          )}
        </form>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
      </div>
    </div>
  )
}

ModalEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    telefone: PropTypes.string,
    cpf: PropTypes.string,
    password: PropTypes.string,
  }),
}

export default ModalEdit
