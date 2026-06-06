import HeroScreen from "../pages/Hero"

import DonationsPage from "../pages/DonationsPage"

import DonationsEdit from "../Components/ErycComponents/DonationsEdit"

import Navbar from "../Components/TaylorComponents/Navbar"

import PaginaEditarCadastro from "../Components/EduardoComponents/pageEdit"

import LoginPage from "../pages/LoginPage"

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
    element: <DonationsPage />,
  },
  // Parte do Eryc
  {
    path: "/DonationsEdit",
    element: (
      <div>
        <Navbar />
        <DonationsEdit />
      </div>
    ),
  },
  // Parte do Scalco
  {
    path: "/PaginaEditarCadastro",
    element: (
      <div>
        <Navbar />
        <PaginaEditarCadastro />
      </div>
    ),
  },
  // Parte do Miguelindo
  {
    path: "/login",
    element: <LoginPage />,
  },
])

export default routes
