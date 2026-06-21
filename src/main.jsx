import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "@/app"
import "./index.css"
import AppProviders from "@/app/providers"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
        <App />
    </AppProviders>
  </StrictMode>
)
