import PropTypes from "prop-types";
import { getButtonVariant } from "../ui/styles/buttonVariants";

export default function Button({
    children,
    onClick,
    variant = "primary",
    type = "button",
    className = "",
    ...rest
}) {

    const { background, hoverBackground, text } =
        getButtonVariant(variant);

    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                ${background}
                ${hoverBackground}
                ${text}
                font-semibold
                py-2
                px-4
                rounded
                transition-colors
                ${className}
            `}
            {...rest}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
};