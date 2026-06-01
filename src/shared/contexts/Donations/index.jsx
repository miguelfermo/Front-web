import { createContext, useState } from "react"
import PropTypes from "prop-types"

const DonationsContext = createContext(null)

export function DonationsProvider({ children }) {
  const [donations, setDonations] = useState([])

  return (
    <DonationsContext.Provider value={{ donations, setDonations }}>
      {children}
    </DonationsContext.Provider>
  )
}

DonationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
