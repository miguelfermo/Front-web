import PropTypes from "prop-types";
import Button from "./Button";

export default function ActionButtons({
    primaryText,
    secondaryText,
    onPrimaryClick,
    onSecondaryClick,
    primaryVariant = "primary",
    secondaryVariant = "danger",
}) {
    return (
        <div className="flex gap-2 mt-4 justify-between">
            <Button
                variant={primaryVariant}
                onClick={onPrimaryClick}
                className="min-w-[50%]"
            >
                {primaryText}
            </Button>

            <Button
                variant={secondaryVariant}
                onClick={onSecondaryClick}
                className="min-w-[50%]"
            >
                {secondaryText}
            </Button>
        </div>
    );
}

ActionButtons.propTypes = {
    primaryText: PropTypes.string.isRequired,
    secondaryText: PropTypes.string.isRequired,
    onPrimaryClick: PropTypes.func.isRequired,
    onSecondaryClick: PropTypes.func.isRequired,
    primaryVariant: PropTypes.string,
    secondaryVariant: PropTypes.string,
};