import HeaderDN from "../Components/IsisComponents/header"
import FooterDN from "../Components/IsisComponents/Footer"
import Telainicial from "../Components/IsisComponents/Telainicial"

import DonationsPage from "../pages/DonationsPage"

import DonationsEdit from "../Components/ErycComponents/DonationsEdit"
import NavBarEdit from "../Components/ErycComponents/NavBarEdit"

import PaginaEditarCadastro from "../Components/EduardoComponents/pageEdit"

import LoginPage from "../pages/LoginPage"

import { createBrowserRouter } from "react-router-dom"

const routes = createBrowserRouter([
  // Parte da Isis
  {
    path: "/",
    element: (
      <div>
        <HeaderDN />
        <Telainicial />
        <FooterDN />
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
          <NavBarEdit />
          <DonationsEdit />
          <FooterDN />
        </div>
      ),
    },
     // Parte do Scalco
    {
      path: "/userEdit",
      element: <PaginaEditarCadastro />,
    },
    // Parte do Miguelindo
    {
      path: "/login",
      element: <LoginPage />,
    }
])

export default routes
