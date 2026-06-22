import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Subtitle from "@/shared/ui/Subtitle"
import Input from "@/shared/ui/Input"
import Button from "@/shared/ui/Button"
import ActionButtons from "@/shared/ui/ActionButtons"

const emptyUser = {
  name: "",
  email: "",
  telefone: "",
  cpf: "",
  password: "",
}

const ModalEdit = ({ open, onClose, data }) => {
  const { updateUser, deleteUser } = useAuth()
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

    updateUser(formData)
    onClose()
  }

  const handleDeleteUser = () => {
    setIsDeleteConfirmationOpen(true)
    setFormErrors({ message: "Confirme a exclusao do cadastro." })
  }

  const confirmDeleteUser = () => {
    deleteUser(formData.email)
    navigate("/login")
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
        <Subtitle className="text-2xl font-bold mb-6">Editar Cadastro</Subtitle>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <Input
            type="tel"
            placeholder="Telefone"
            name="telefone"
            value={formData.telefone || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <Input
            type="text"
            placeholder="CPF"
            name="cpf"
            value={formData.cpf || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <Input
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
            <ActionButtons
              primaryText="Salvar"
              secondaryText="Excluir"
              onPrimaryClick={handleSubmit}
              onSecondaryClick={handleDeleteUser}
              primaryVariant="primary"
              secondaryVariant="danger"
            />
          ) : (
            <ActionButtons
              primaryText="Confirmar"
              secondaryText="Cancelar"
              onPrimaryClick={confirmDeleteUser}
              onSecondaryClick={() => {
                setIsDeleteConfirmationOpen(false)
                setFormErrors({})
              }}
              primaryVariant="danger"
              secondaryVariant="secondary"
            />
          )}
        </form>
        <Button
          variant="danger"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          X
        </Button>
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
