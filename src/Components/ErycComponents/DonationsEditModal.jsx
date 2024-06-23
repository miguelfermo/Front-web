import PropTypes from "prop-types";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <button
          className="text-red-500 font-bold text-lg mb-4 justify-end items-end"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
