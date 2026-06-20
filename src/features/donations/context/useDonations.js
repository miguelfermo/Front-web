import { useContext } from "react";
import DonationsContext from "./DonationsContext";

export function useDonations() {
    return useContext(DonationsContext);
}
