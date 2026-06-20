import PropTypes from "prop-types";
import Card from "@/shared/ui/Card";
import Subtitle from "@/shared/ui/Subtitle";
import Paragraph from "@/shared/ui/Paragraph";
import ActionButtons from "@/shared/ui/ActionButtons";

export default function DonationCard({
    donation,
    onEdit,
    onDelete,
}) {
    return (
        <Card>
            <Subtitle>{donation.title}</Subtitle>

            <Paragraph>Localização: {donation.location}</Paragraph>

            <Paragraph>Descrição: {donation.description}</Paragraph>

            <Paragraph>Companhia: {donation.company}</Paragraph>

            <Paragraph>R$ {donation.value}</Paragraph>

            <ActionButtons
                primaryText="Editar"
                secondaryText="Deletar"
                onPrimaryClick={onEdit}
                onSecondaryClick={onDelete}
            />
        </Card>
    );
}

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};