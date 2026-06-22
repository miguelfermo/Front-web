import { useContext } from "react";
import DonationsContext from "../context/DonationsContext";

export function useDonations() {
    return useContext(DonationsContext);
}
