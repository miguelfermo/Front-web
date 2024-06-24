import { useState } from "react";
import PropTypes from "prop-types";
import { BiTimeFive } from "react-icons/bi";
import Modal from "./Modal";
import { useDonations } from '../../context/DonationsContext';

const Donations = ({ searchTerm, companyTerm, locationTerm }) => {
  const { donations } = useDonations()
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredData = donations.filter((donation) => {
    return (
      donation.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      donation.company.toLowerCase().includes(companyTerm.toLowerCase()) &&
      donation.location.toLowerCase().includes(locationTerm.toLowerCase())
    )
  })

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
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {filteredData.length > 0 ? (
          filteredData.map(
            ({ id, image, title, time, location, desc, company }) => (
              <div
                key={id}
                className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-greyIsh bg-opacity-60 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
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
                  onClick={() =>
                    openModal({
                      id,
                      image,
                      title,
                      time,
                      location,
                      desc,
                      company,
                    })
                  }
                  className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-gray-400 group-hover/item:text-textColor group-hover:text-black"
                >
                  Doar
                </button>
              </div>
            )
          )
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

