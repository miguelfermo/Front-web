import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { AuthProvider } from "./features/auth/context/AuthProvider"
import { DonationsProvider } from "./context/DonationsContext"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DonationsProvider>
        <App />
      </DonationsProvider>
    </AuthProvider>
  </StrictMode>
)
