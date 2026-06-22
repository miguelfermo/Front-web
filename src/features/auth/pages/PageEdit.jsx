import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useLocation, useNavigate } from "react-router-dom"
import ActionButtons from "@/shared/ui/ActionButtons"
import Input from "@/shared/ui/Input"

export default function PaginaEditarCadastro({ onSave }) {
  const location = useLocation()
  const navigate = useNavigate()
  const userFromRoute = location.state?.user
  const [formData, setFormData] = useState(userFromRoute || {})

  useEffect(() => {
    setFormData(userFromRoute || {})
  }, [userFromRoute])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((previousData) => ({ ...previousData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (onSave) {
      onSave(formData)
      return
    }

    navigate("/donations")
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">Editar Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome Completo"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <Input
          type="tel"
          placeholder="Telefone"
          name="telefone"
          value={formData.telefone || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <Input
          type="text"
          placeholder="CPF"
          name="cpf"
          value={formData.cpf || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <Input
          type="text"
          placeholder="CEP"
          name="cep"
          value={formData.cep || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <Input
          type="text"
          placeholder="Logradouro"
          name="logradouro"
          value={formData.logradouro || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <Input
          type="password"
          placeholder="Senha"
          name="senha"
          value={formData.senha || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <Input
          type="password"
          placeholder="Confirmação de Senha"
          name="confirmacao"
          value={formData.confirmacao || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <ActionButtons
          primaryText="Salvar"
          secondaryText="Cancelar"
          onPrimaryClick={handleSubmit}
          onSecondaryClick={() => navigate("/donations")}
          primaryVariant="primary"
          secondaryVariant="secondary"
        />
      </form>
    </div>
  )
}

PaginaEditarCadastro.propTypes = {
  onSave: PropTypes.func,
}
