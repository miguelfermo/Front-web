import { useState } from "react"

import Navbar from "../Components/TaylorComponents/Navbar"
import Search from "../Components/TaylorComponents/Search"
import Donations from "../Components/TaylorComponents/Donations"

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