import PropTypes from "prop-types"
import { DonationsProvider } from "../../shared/contexts/Donations"
import { UserProvider } from "../../shared/contexts/User"

export default function AppProviders({ children }) {
  return (
    <UserProvider>
      <DonationsProvider>{children}</DonationsProvider>
    </UserProvider>
  )
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
}
