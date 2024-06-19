import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Miguelstyles.css"
import { useUser } from "../../context/UserContext"

const SignUpForm = () => {
  const navigate = useNavigate()
  const { setUser } = useUser()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = () => {
    // Aqui você deve adicionar a lógica de autenticação
    setUser({ name, email, password })
    navigate("/Donations")
  }

  return (
    <div className="form-container sign-up-container">
      <form className="form-miguel" action="#">
        <h1 className="h1-miguel">Crie sua Conta!</h1>
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <div className="btn-grad" id="signup" onClick={handleSignUp}>
          Sign Up
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
