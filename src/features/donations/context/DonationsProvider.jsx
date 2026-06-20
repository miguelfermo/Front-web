import PropTypes from "prop-types";
import DonationsContext from "./DonationsContext";
import { useDonation } from "../hooks/useDonation";

export default function DonationsProvider({ children }) {
    const donation = useDonation();

    return (
        <DonationsContext.Provider value={donation}>
            {children}
        </DonationsContext.Provider>
    );
}

DonationsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
