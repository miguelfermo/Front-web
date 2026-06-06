import { useState } from "react"
import PropTypes from "prop-types"
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai"
import { BsHouseDoor } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { Link } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Search = ({ onSearchChange }) => {
  const { user } = useUser()
  const [searchTerm, setSearchTerm] = useState("")
  const [companyTerm, setCompanyTerm] = useState("")
  const [locationTerm, setLocationTerm] = useState("")

  const handleSearchChange = () => {
    onSearchChange({ searchTerm, companyTerm, locationTerm })
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
              onChange={(e) => {
                setSearchTerm(e.target.value)
                handleSearchChange()
              }}
            />
            <AiOutlineCloseCircle
              className="text-3xl text-gray-400 hover:text-textColor cursor-pointer"
              onClick={() => {
                setSearchTerm("")
                handleSearchChange()
              }}
            />
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-2xl cursor-pointer" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Pesquise por companhia"
              value={companyTerm}
              onChange={(e) => {
                setCompanyTerm(e.target.value)
                handleSearchChange()
              }}
            />
            <AiOutlineCloseCircle
              className="text-3xl text-gray-400 hover:text-textColor cursor-pointer"
              onClick={() => {
                setCompanyTerm("")
                handleSearchChange()
              }}
            />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-2xl cursor-pointer" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Pesquisa por local"
              value={locationTerm}
              onChange={(e) => {
                setLocationTerm(e.target.value)
                handleSearchChange()
              }}
            />
            <AiOutlineCloseCircle
              className="text-3xl text-gray-400 hover:text-textColor cursor-pointer"
              onClick={() => {
                setLocationTerm("")
                handleSearchChange()
              }}
            />
          </div>

          {user && (
            <button className="bg-orange-600 h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-orange-800">
              <Link to="/DonationsEdit">Criar nova doação</Link>
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
