import DonationForm from "../components/DonationForm";
import DonationList from "../components/DonationList";
import DonationModal from "../components/DonationModal";
import AddDonationButton from "../components/AddDonationButton";
import { useDonations } from "../hooks/useDonations";

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
        <div className="m-6 px-4 py-6 bg-gray-100 rounded shadow max-h-screen overflow-y-auto">
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
                    onSave={() => {
                        const saved = saveDonation();

                        if (saved) {
                            closeDonationModal();
                        }
                    }}
                    onCancel={closeDonationModal}
                    isEditing={isEditing}
                />
            </DonationModal>
        </div>
    );
}
