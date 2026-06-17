import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { UserProvider } from "./context/UserContext"
import { DonationsProvider } from "./context/DonationsContext"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <DonationsProvider>
        <App />
      </DonationsProvider>
    </UserProvider>
  </StrictMode>
)
