import { useState } from "react"

import Navbar from "@/features/donations/components/NavBar"
import Search from "@/features/donations/components/Search"
import Donations from "@/features/donations/components/Donations"

const DonationsPage = () => {
  const [searchTerms, setSearchTerms] = useState({
    searchTerm: "",
    companyTerm: "",
    locationTerm: "",
  })

  const handleSearchChange = (newTerms) => {
    setSearchTerms(newTerms)
  }

  return (
    <div>
      <Navbar />
      <Search onSearchChange={handleSearchChange} />
      <Donations
        searchTerm={searchTerms.searchTerm}
        companyTerm={searchTerms.companyTerm}
        locationTerm={searchTerms.locationTerm}
      />
    </div>
  )
}

export default DonationsPage
