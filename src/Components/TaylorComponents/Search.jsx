import { useState } from "react"
import PropTypes from "prop-types"
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai"
import { BsHouseDoor } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { Link } from "react-router-dom"
import { useAuth } from "../../features/auth/hooks/useAuth"

const INITIAL_TERMS = {
  searchTerm: "",
  companyTerm: "",
  locationTerm: "",
}

const SEARCH_FIELDS = [
  {
    name: "searchTerm",
    icon: AiOutlineSearch,
    placeholder: "Pesquise sua vaquinha",
    closeTestId: "search-close",
  },
  {
    name: "companyTerm",
    icon: BsHouseDoor,
    placeholder: "Pesquise por companhia",
    closeTestId: "company-close",
  },
  {
    name: "locationTerm",
    icon: CiLocationOn,
    placeholder: "Pesquisa por local",
    closeTestId: "location-close",
  },
]

const Search = ({ onSearchChange }) => {
  const { user } = useAuth()
  const [terms, setTerms] = useState(INITIAL_TERMS)

  const updateTerm = (field, value) => {
    const nextTerms = { ...terms, [field]: value }
    setTerms(nextTerms)
    onSearchChange(nextTerms)
  }

  return (
    <div className="grid gap-7 bg-greyIsh rounded-lg p-12">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="flex justify-between items-center rounded-lg gap-20 bg-white p-5 shadow-lg shadow-greyIsh-700">
          {SEARCH_FIELDS.map(
            ({ name, icon: Icon, placeholder, closeTestId }) => (
              <div className="flex gap-2 items-center" key={name}>
                <Icon className="text-2xl cursor-pointer" />
                <input
                  type="text"
                  className="bg-transparent text-blue-500 focus:outline-none w-full"
                  placeholder={placeholder}
                  value={terms[name]}
                  onChange={(e) => updateTerm(name, e.target.value)}
                />
                <AiOutlineCloseCircle
                  data-testid={closeTestId}
                  className="text-3xl text-gray-400 hover:text-textColor cursor-pointer"
                  onClick={() => updateTerm(name, "")}
                />
              </div>
            ),
          )}

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
