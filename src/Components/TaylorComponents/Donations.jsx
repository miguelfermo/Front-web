import { useState } from "react"
import PropTypes from "prop-types"
import { BiTimeFive } from "react-icons/bi"
import Modal from "./Modal"
import { useDonations } from "../../context/DonationsContext"

const normalizeSearchValue = (value) => String(value ?? "").toLowerCase()

const matchesFilters = (
  donation,
  { searchTerm, companyTerm, locationTerm },
) => {
  return (
    normalizeSearchValue(donation.title).includes(
      normalizeSearchValue(searchTerm),
    ) &&
    normalizeSearchValue(donation.company).includes(
      normalizeSearchValue(companyTerm),
    ) &&
    normalizeSearchValue(donation.location).includes(
      normalizeSearchValue(locationTerm),
    )
  )
}

const DonationCard = ({ donation, onDonate }) => {
  const { image, title, time, location, desc, company } = donation

  return (
    <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-greyIsh bg-opacity-60 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
      <span className="flex justify-between items-center gap-4">
        <h1 className="text-[16px] font-semibold text-textColor group-hover:text-black">
          {title}
        </h1>
        <span className="flex items-center text-[#ccc] gap-1">
          <BiTimeFive /> {time}
        </span>
      </span>
      <h6 className="text-[#ccc]">{location}</h6>
      <p className="text-[14px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-black">
        {desc}
      </p>

      <div className="company flex items-center gap-2">
        <img
          src={image}
          title="iconicons"
          alt="Company logo"
          className="w-[10%]"
        />
        <span className="text-[14px] py-[1rem] block group-hover:text-black">
          {company}
        </span>
      </div>
      <button
        onClick={() => onDonate(donation)}
        className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-gray-400 group-hover/item:text-textColor group-hover:text-black"
      >
        Doar
      </button>
    </div>
  )
}

DonationCard.propTypes = {
  donation: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    location: PropTypes.string,
    desc: PropTypes.string,
    company: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onDonate: PropTypes.func.isRequired,
}

const Donations = ({ searchTerm, companyTerm, locationTerm }) => {
  const { donations } = useDonations()
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredDonations = donations.filter((donation) =>
    matchesFilters(donation, { searchTerm, companyTerm, locationTerm }),
  )

  const openModal = (campaign) => {
    setSelectedCampaign(campaign)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedCampaign(null)
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="flex gap-10 justify-center flex-wrap items-center py-10">
        {filteredDonations.length > 0 ? (
          filteredDonations.map((donation) => (
            <DonationCard
              key={donation.id}
              donation={donation}
              onDonate={openModal}
            />
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>

      {isModalOpen && (
        <Modal campaign={selectedCampaign} onClose={closeModal} />
      )}
    </div>
  )
}

Donations.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  companyTerm: PropTypes.string.isRequired,
  locationTerm: PropTypes.string.isRequired,
}

export default Donations
