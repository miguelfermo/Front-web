import { createBrowserRouter } from "react-router-dom"
import HeroScreen from "@/pages/Hero"
import DonationsPage from "@/pages/DonationsPage"
import DonationsEditPage from "@/features/donations/pages/DonationsEditPage"
import LoginPage from "@/features/auth/pages/LoginPage"
import RequireAuth from "@/features/auth/components/RequireAuth"
import Navbar from "@/features/donations/components/NavBar"
import PaginaEditarCadastro from "@/Components/EduardoComponents/PageEdit"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroScreen />,
  },
  {
    path: "/Donations",
    element: (
      <RequireAuth>
        <DonationsPage />
      </RequireAuth>
    ),
  },
  {
    path: "/donations/edit/",
    element: (
      <RequireAuth>
        <div>
          <Navbar />
          <DonationsEditPage />
        </div>
      </RequireAuth>
    ),
  },
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
  {
    path: "/login",
    element: <LoginPage />,
  },
])
