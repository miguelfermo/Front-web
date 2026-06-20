import { useState } from "react"
import PropTypes from "prop-types"
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai"
import { BsHouseDoor } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { Link } from "react-router-dom"
import { useAuth } from "../../features/auth/hooks/useAuth"

const Search = ({ onSearchChange }) => {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState("")
  const [companyTerm, setCompanyTerm] = useState("")
  const [locationTerm, setLocationTerm] = useState("")

  const updateSearchTerms = (field, value) => {
    const nextTerms = {
      searchTerm,
      companyTerm,
      locationTerm,
      [field]: value,
    }

    setSearchTerm(nextTerms.searchTerm)
    setCompanyTerm(nextTerms.companyTerm)
    setLocationTerm(nextTerms.locationTerm)
    onSearchChange(nextTerms)
  }

  return (
    <div className="grid gap-7 bg-greyIsh rounded-lg p-12">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="flex justify-between items-center rounded-lg gap-20 bg-white p-5 shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-2xl cursor-pointer" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Pesquise sua vaquinha"
              value={searchTerm}
              onChange={(e) => updateSearchTerms("searchTerm", e.target.value)}
            />
            <AiOutlineCloseCircle
              data-testid="search-close"
              className="text-3xl text-gray-400 hover:text-textColor cursor-pointer"
              onClick={() => updateSearchTerms("searchTerm", "")}
            />
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-2xl cursor-pointer" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Pesquise por companhia"
              value={companyTerm}
              onChange={(e) => updateSearchTerms("companyTerm", e.target.value)}
            />
            <AiOutlineCloseCircle
              data-testid="company-close"
              className="text-3xl text-gray-400 hover:text-textColor cursor-pointer"
              onClick={() => updateSearchTerms("companyTerm", "")}
            />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-2xl cursor-pointer" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Pesquisa por local"
              value={locationTerm}
              onChange={(e) => updateSearchTerms("locationTerm", e.target.value)}
            />
            <AiOutlineCloseCircle
              data-testid="location-close"
              className="text-3xl text-gray-400 hover:text-textColor cursor-pointer"
              onClick={() => updateSearchTerms("locationTerm", "")}
            />
          </div>

          {user && (
            <button className="bg-orange-600 h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-orange-800">
              <Link to="/donations/edit/">Criar nova doação</Link>
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
}

export default Search
