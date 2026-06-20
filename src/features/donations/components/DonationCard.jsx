import PropTypes from "prop-types";
import Button from "../../../shared/ui/Button";
import Card from "../../../shared/ui/Card";

export default function DonationCard({
    donation,
    onEdit,
    onDelete,
}) {
    return (
        <Card>
            <h2>{donation.title}</h2>

            <p>{donation.location}</p>

            <p>{donation.description}</p>

            <p>{donation.company}</p>

            <p>R$ {donation.value}</p>

            <div className="flex gap-2 mt-4">
                <Button
                    variant="primary"
                    onClick={onEdit}
                >
                    Editar
                </Button>

                <Button
                    variant="danger"
                    onClick={onDelete}
                >
                    Deletar
                </Button>
            </div>
        </Card>
    );
}

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};