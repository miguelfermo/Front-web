import { useState } from "react"
import PropTypes from "prop-types"
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai"
import { BsHouseDoor } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"

const Search = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [companyTerm, setCompanyTerm] = useState("")
  const [locationTerm, setLocationTerm] = useState("")

  const handleSearchChange = () => {
    onSearchChange({ searchTerm, companyTerm, locationTerm })
  }

  return (
    <div className="searchDiv grid gap-7 bg-greyIsh rounded-[10px] p-[3rem]">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[70px] bg-white p-5 shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Pesquise sua vaquinha"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                handleSearchChange()
              }}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer"
              onClick={() => {
                setSearchTerm("")
                handleSearchChange()
              }}
            />
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Pesquise por companhia"
              value={companyTerm}
              onChange={(e) => {
                setCompanyTerm(e.target.value)
                handleSearchChange()
              }}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer"
              onClick={() => {
                setCompanyTerm("")
                handleSearchChange()
              }}
            />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Pesquisa por local"
              value={locationTerm}
              onChange={(e) => {
                setLocationTerm(e.target.value)
                handleSearchChange()
              }}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer"
              onClick={() => {
                setLocationTerm("")
                handleSearchChange()
              }}
            />
          </div>

          <button className="bg-orange-600 h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-orange-800">
            Buscar
          </button>
        </div>
      </form>
    </div>
  )
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
}

export default Search
