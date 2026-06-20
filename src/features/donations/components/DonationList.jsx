import PropTypes from "prop-types";
import DonationCard from "./DonationCard";

export default function DonationList({
    donations,
    onEdit,
    onDelete,
}) {
    return (
        <div className="flex flex-row mt-4 gap-4 flex-wrap justify-start">
            {donations.map((donation, index) => (
                <DonationCard
                    key={donation.id}
                    donation={donation}
                    onEdit={() => onEdit(index)}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </div>
    );
}

DonationList.propTypes = {
    donations: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};