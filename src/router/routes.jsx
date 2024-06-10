import HeaderDN from "../Components/IsisComponents/header"
import FooterDN from "../Components/IsisComponents/Footer"
import Telainicial from "../Components/IsisComponents/Telainicial"

import Navbar from "../Components/TaylorComponents/Navbar"
import Search from "../Components/TaylorComponents/Search"
import Donations from "../Components/TaylorComponents/Donations"

import DonationsEdit from "../Components/ErycComponents/DonationsEdit"
import NavBarEdit from "../Components/ErycComponents/NavBarEdit"

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
    element: (
      <div>
        <Navbar />
        <Search />
        <Donations />
      </div>
    ),
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
])

export default routes
