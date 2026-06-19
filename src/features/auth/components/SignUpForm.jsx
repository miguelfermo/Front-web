import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const SignUpForm = () => {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
    if (!name || !email || !password) {
      setError('Todos os campos são obrigatórios.')
      return
    }
    try {
      register({ name, email, password })
      navigate('/Donations')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="absolute top-0 left-0 w-1/2 h-full opacity-0 z-[1] transition-all duration-[600ms] ease-in-out">
      <form className="bg-white flex flex-col items-center justify-center py-0 px-12 h-full text-center" onSubmit={handleSignUp}>
        <h1 className="text-4xl font-bold m-0 mb-1">Crie sua Conta!</h1>
        {error && <p className="text-red-500 mt-2.5">{error}</p>}
        <input
          className="bg-gray-200 border-none py-2 px-4 my-2 w-full text-sm"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="bg-gray-200 border-none py-2 px-4 my-2 w-full text-sm"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="bg-gray-200 border-none py-2 px-4 my-2 w-full text-sm"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold py-3 px-12 m-2 rounded-lg cursor-pointer border-none text-center uppercase transition-all duration-500 hover:bg-gradient-to-l"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
