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

  const handleSignUp = (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      setError("Todos os campos são obrigatórios.")
      return
    }

    const users = JSON.parse(localStorage.getItem("users")) || []

    const userExists = users.some(user => user.email === email)

    if (userExists) {
      setError("Usuário já cadastrado.")
      return
    }

    const newUser = { name, email, password }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    setUser(newUser)
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
