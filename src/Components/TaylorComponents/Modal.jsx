import PropTypes from "prop-types"

const Modal = ({ campaign, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 md:mx-auto">
        <button
          className="text-red-500 font-bold text-lg mb-4"
          onClick={onClose}
        >
          Fechar
        </button>
        <h2 className="text-2xl font-bold mb-4">{campaign.title}</h2>
        <div className="flex gap-4">
          <img
            src={campaign.image}
            alt="Company logo"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="mb-2">
              <strong>Tempo:</strong> {campaign.time}
            </p>
            <p className="mb-2">
              <strong>Localização:</strong> {campaign.location}
            </p>
            <p className="mb-2">
              <strong>Descrição:</strong> {campaign.desc}
            </p>
            <p className="mb-2">
              <strong>Companhia:</strong> {campaign.company}
            </p>
          </div>
        </div>
        <aside className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Opções de Doação:</h3>
          <ul className="list-disc ml-6">
            <li className="mb-1">Doação em dinheiro</li>
            <li className="mb-1">Doação em outras formas(Roupas, Alimentos, etc..)</li>
          </ul>
        </aside>
      </div>
    </div>
  )
}

Modal.propTypes = {
  campaign: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
