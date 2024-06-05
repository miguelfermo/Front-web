import HeaderDN from "../Components/IsisComponents/header"
import FooterDN from "../Components/IsisComponents/Footer"

import Navbar from "../Components/TaylorComponents/Navbar"
import Search from "../Components/TaylorComponents/Search"
import Donations from "../Components/TaylorComponents/Donations"

import { createBrowserRouter } from "react-router-dom"

const routes = createBrowserRouter([
  // Parte da Isis
  {
    path: "/",
    element: (
      <div>
        <HeaderDN />
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
])

export default routes
