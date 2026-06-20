import PropTypes from "prop-types";
import Modal from "@/shared/ui/Modal";

export default function DonationModal({
    isOpen,
    onClose,
    children,
}) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            {children}
        </Modal>
    );
}

DonationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};