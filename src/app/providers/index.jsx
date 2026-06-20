import PropTypes from "prop-types"
import { AuthProvider } from "@/features/auth/context/AuthProvider"
import DonationsProvider from "@/features/donations/context/DonationsProvider"

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <DonationsProvider>{children}</DonationsProvider>
    </AuthProvider>
  )
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
}
