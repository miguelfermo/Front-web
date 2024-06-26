import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
import App from "./App"
import "./index.css"
import { UserProvider } from "./context/UserContext"
import { DonationsProvider } from "./context/DonationsContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <DonationsProvider>
        <App />
      </DonationsProvider>
    </UserProvider>
  </React.StrictMode>
)
