import { createBrowserRouter } from "react-router-dom"
import HeroScreen from "@/features/hero/pages/HeroPage"
import DonationsPage from "@/features/donations/pages/DonationsPage"
import DonationsEditPage from "@/features/donations/pages/DonationsEditPage"
import LoginPage from "@/features/auth/pages/LoginPage"
import RequireAuth from "@/features/auth/components/RequireAuth"
import Navbar from "@/features/donations/components/NavBar"
import PaginaEditarCadastro from "@/features/auth/pages/PageEdit"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroScreen />,
  },
  {
    path: "/donations",
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
        <Navbar />
        <DonationsEditPage />
      </RequireAuth>
    ),
  },
  {
    path: "/register/edit/",
    element: (
      <RequireAuth>
        <Navbar />
        <PaginaEditarCadastro />
      </RequireAuth>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
])
