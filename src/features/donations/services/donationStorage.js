import { readStorage, writeStorage } from "@/shared/storage/localStorage";

export const loadDonations = () => readStorage("donations", []);

export const saveDonations = (donations) => {
    writeStorage("donations", donations);
};
