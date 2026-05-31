import { createBrowserRouter } from "react-router-dom"
import DonationManagerPage from "../../pages/DonationManager"
import DonationsPage from "../../pages/Donations"
import HomePage from "../../pages/Home"
import LoginPage from "../../pages/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/Donations",
    element: <DonationsPage />,
  },
  {
    path: "/DonationsEdit",
    element: <DonationManagerPage />,
  },
])

export default router
