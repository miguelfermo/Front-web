import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Miguelstyles.css"
import { useUser } from "../../context/UserContext"

const SignInForm = () => {
  const navigate = useNavigate()
  const { setUser } = useUser()
  const [email, setEmail] = useState("")

  const handleSignIn = () => {
    // Aqui você deve adicionar a lógica de autenticação
    setUser({ email })
    navigate("/Donations")
  }

  return (
    <div className="form-container sign-in-container">
      <form className="form-miguel" action="#">
        <h1 className="h1-miguel">Login</h1>
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
          required
        />
        <a className="a-miguel" href="#">
          Esqueceu sua senha?
        </a>
        <div className="btn-grad" id="signin" onClick={handleSignIn}>
          Sign In
        </div>
      </form>
    </div>
  )
}

export default SignInForm
