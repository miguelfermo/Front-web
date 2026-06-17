import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

const DonationsContext = createContext()

export const DonationsProvider = ({ children }) => {
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

// eslint-disable-next-line react-refresh/only-export-components
export const useDonations = () => useContext(DonationsContext)

export default DonationsContext
