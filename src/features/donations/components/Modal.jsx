import { useState } from "react"
import PropTypes from "prop-types"
import { FaUserCircle } from "react-icons/fa"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { saveUserDonation } from "@/features/donations/services/userDonationStorage"
import Button from "@/shared/ui/Button"

const DONATION_OPTIONS = [
  { id: "cash", label: "Doação em dinheiro" },
  {
    id: "other",
    label: "Doação em outras formas(Roupas, Alimentos, etc..)",
  },
]

const Modal = ({ campaign, onClose }) => {
  const { user } = useAuth()
  const [selectedOption, setSelectedOption] = useState(null)
  const { id, title, image, location, desc, company, value } = campaign

  const handleDonate = () => {
    if (!selectedOption) return

    const option = DONATION_OPTIONS.find(({ id: optionId }) => optionId === selectedOption)

    saveUserDonation({
      id: Date.now().toString(),
      campaignId: id ?? title,
      campaignTitle: title,
      type: selectedOption,
      typeLabel: option.label,
      userEmail: user?.email ?? null,
      userName: user?.name ?? null,
      donatedAt: new Date().toISOString(),
    })

    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg mx-4 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="text-red-600 hover:text-red-800 font-medium mb-2"
        >
          Fechar
        </button>

        <h1 className="text-2xl font-bold text-black mb-6">{title}</h1>

        <div className="flex gap-4 items-start mb-6">
          {image ? (
            <img
              className="w-16 h-16 object-cover rounded-full flex-shrink-0"
              src={image}
              alt={title}
            />
          ) : (
            <FaUserCircle className="text-orange-500 text-6xl flex-shrink-0" />
          )}
          <div className="grid gap-1 text-black">
            <p>
              <strong>Localização:</strong> {location}
            </p>
            <p>
              <strong>Descrição:</strong> {desc}
            </p>
            <p>
              <strong>Companhia:</strong> {company}
            </p>
            <p>
              <strong>Meta de Doação:</strong> {value} R$
            </p>
          </div>
        </div>

        <p className="font-bold text-black mb-3">Opções de Doação:</p>
        <div className="flex gap-6 flex-wrap mb-8">
          {DONATION_OPTIONS.map(({ id: optionId, label }) => (
            <button
              key={optionId}
              type="button"
              onClick={() => setSelectedOption(optionId)}
              className={`text-sm cursor-pointer hover:underline ${
                selectedOption === optionId
                  ? "font-bold text-orange-600"
                  : "text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <Button
          onClick={handleDonate}
          disabled={!selectedOption}
          className="border-[2px] border-gray-400 rounded-[10px] block p-[10px] w-full max-w-xs mx-auto text-[14px] font-semibold text-textColor hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Doar
        </Button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  campaign: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    desc: PropTypes.string,
    company: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
