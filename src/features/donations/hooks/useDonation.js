import { useEffect, useState } from "react";
import { initialInputState } from "../utils/initialInputState";
import { loadDonations, saveDonations } from "../services/donationStorage";
import {
    buildDonationFromInput,
    buildDonationInputFromDonation,
} from "../services/donationService";

const FORM_ERROR_MESSAGE = "Preencha todos os campos obrigatórios.";

export function useDonation() {
    const [donations, setDonations] = useState(() => loadDonations());
    const [input, setInput] = useState(initialInputState);
    const [formError, setFormError] = useState("");
    const [editingDonationId, setEditingDonationId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        saveDonations(donations);
    }, [donations]);

    const resetForm = () => {
        setInput(initialInputState);
        setFormError("");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setInput((previousInput) => ({
            ...previousInput,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (
            !input.title.trim() ||
            !input.location.trim() ||
            !input.description.trim() ||
            !input.company.trim() ||
            Number(input.value) <= 0
        ) {
            setFormError(FORM_ERROR_MESSAGE);

            return false;
        }

        return true;
    };

    const saveDonation = () => {
        if (!validateForm()) return false;

        setDonations((previousDonations) => {
            if (editingDonationId !== null) {
                return previousDonations.map((donation) =>
                    donation.id === editingDonationId
                        ? buildDonationFromInput(input, donation.id)
                        : donation
                );
            }

            return [
                ...previousDonations,
                buildDonationFromInput(input),
            ];
        });

        setEditingDonationId(null);
        resetForm();

        return true;
    };

    const editDonation = (index) => {
        const donation = donations[index];

        setEditingDonationId(donation.id);
        setInput(buildDonationInputFromDonation(donation));
        setFormError("");
    };

    const deleteDonation = (index) => {
        setDonations((previousDonations) =>
            previousDonations.filter((_, currentIndex) => currentIndex !== index)
        );
    };

    const openDonationModal = () => {
        setIsModalOpen(true);
    };

    const closeDonationModal = () => {
        setIsModalOpen(false);
        setEditingDonationId(null);
        resetForm();
    };

    return {
        donations,
        input,
        formError,
        isEditing: editingDonationId !== null,
        isModalOpen,

        handleInputChange,
        saveDonation,
        editDonation,
        deleteDonation,
        openDonationModal,
        closeDonationModal,
    };
}
