import DonationForm from "../components/DonationForm";
import DonationList from "../components/DonationList";
import DonationModal from "../components/DonationModal";
import AddDonationButton from "../components/AddDonationButton";
import { useDonations } from "../context/useDonations";

export default function DonationsEditPage() {
    const {
        donations,
        input,
        formError,
        isEditing,
        handleInputChange,
        saveDonation,
        editDonation,
        deleteDonation,
        isModalOpen,
        openDonationModal,
        closeDonationModal,
    } = useDonations();

    return (
        <div className="container mx-auto px-4 py-6">
            <AddDonationButton
                hasDonations={donations.length > 0}
                onClick={openDonationModal}
            />

            <DonationList
                donations={donations}
                onEdit={(index) => {
                    editDonation(index);
                    openDonationModal();
                }}
                onDelete={deleteDonation}
            />

            <DonationModal
                isOpen={isModalOpen}
                onClose={closeDonationModal}
            >
                <DonationForm
                    input={input}
                    formError={formError}
                    onChange={handleInputChange}
                    onSave={saveDonation}
                    onCancel={closeDonationModal}
                    isEditing={isEditing}
                />
            </DonationModal>
        </div>
    );
}
