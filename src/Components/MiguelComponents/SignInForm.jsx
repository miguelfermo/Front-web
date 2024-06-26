import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Miguelstyles.css"
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
    <div className="form-container sign-in-container">
      <form className="form-miguel" onSubmit={handleSignIn}>
        <h1 className="h1-miguel">Login</h1>
        {error && <p className="error-message">{error}</p>}
        <input
          className="input-miguel"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="input-miguel"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a className="a-miguel" href="#">
          Esqueceu sua senha?
        </a>
        <button className="btn-grad" type="submit" id="signin">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignInForm
