import { createBrowserRouter } from "react-router-dom"
import DonationManagerPage from "../../pages/DonationManager"
import DonationsPage from "../../pages/Donations"
import HomePage from "../../pages/Home"
import LoginPage from "../../features/auth/pages/LoginPage"
import RequireAuth from "../../features/auth/components/RequireAuth"

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
    element: <RequireAuth><DonationsPage /></RequireAuth>,
  },
  {
    path: "/DonationsEdit",
    element: <RequireAuth><DonationManagerPage /></RequireAuth>,
  },
])

export default router
