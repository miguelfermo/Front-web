import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const SignInForm = () => {
  const navigate = useNavigate()
  const { setUser } = useUser()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSignIn = (e) => {
    e.preventDefault()

    if (!name || !password) {
      setError("Todos os campos são obrigatórios.")
      return
    }

    const users = JSON.parse(localStorage.getItem("users")) || []

    const user = users.find(user => user.name === name)

    if (!user) {
      setError("Usuário não encontrado.")
      return
    }
    
    if (user.password !== password) {
      setError("Senha incorreta.")
      return
    }

    navigate("/Donations")
  }

  return (
    <div className="absolute top-0 left-0 w-1/2 h-full z-20 transition-transform duration-600 ease-in-out">
      <form className="bg-white flex flex-col items-center justify-center py-0 px-12 h-full text-center" onSubmit={handleSignIn}>
        <h1 className="text-4xl font-bold m-0 mb-1">Login</h1>
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
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a className="text-gray-800 text-sm no-underline my-4" href="#">
          Esqueceu sua senha?
        </a>
        <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold py-3 px-12 m-2 rounded-lg cursor-pointer border-none text-center uppercase transition-all duration-500 hover:bg-gradient-to-l" type="submit" id="signin">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignInForm