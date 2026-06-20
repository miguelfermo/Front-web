import PropTypes from "prop-types";
import Button from "../../../shared/ui/Button";

export default function AddDonationButton({
    hasDonations,
    onClick,
}) {
    return (
        <Button
            variant="primary"
            onClick={onClick}
        >
            {hasDonations
                ? "+ Doações"
                : "Criar Doações"}
        </Button>
    );
}

AddDonationButton.propTypes = {
    hasDonations: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};