import HeroScreen from "../pages/Hero"

import DonationsPage from "../pages/DonationsPage"

import DonationsEdit from "../Components/ErycComponents/DonationsEdit"

import Navbar from "../Components/TaylorComponents/NavBar"

import PaginaEditarCadastro from "../Components/EduardoComponents/PageEdit"

import LoginPage from "../features/auth/pages/LoginPage"
import RequireAuth from "../features/auth/components/RequireAuth"

import { createBrowserRouter } from "react-router-dom"

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <HeroScreen />
      </div>
    ),
  },
  // Parte do Taylor
  {
    path: "/Donations",
    element: <RequireAuth><DonationsPage /></RequireAuth>,
  },
  // Parte do Eryc
  {
    path: "/DonationsEdit",
    element: (
      <RequireAuth>
        <div>
          <Navbar />
          <DonationsEdit />
        </div>
      </RequireAuth>
    ),
  },
  // Parte do Scalco
  {
    path: "/PaginaEditarCadastro",
    element: (
      <RequireAuth>
        <div>
          <Navbar />
          <PaginaEditarCadastro />
        </div>
      </RequireAuth>
    ),
  },
  // Parte do Miguelindo
  {
    path: "/login",
    element: <LoginPage />,
  },
])

export default routes
