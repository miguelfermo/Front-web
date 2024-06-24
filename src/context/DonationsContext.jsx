import React, { createContext, useContext, useState } from "react"

const DonationsContext = createContext()

export const DonationsProvider = ({ children }) => {
  const [donations, setDonations] = useState([])

  return (
    <DonationsContext.Provider value={{ donations, setDonations }}>
      {children}
    </DonationsContext.Provider>
  )
}

export const useDonations = () => useContext(DonationsContext)

export default DonationsContext
