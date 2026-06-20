import PropTypes from "prop-types";

export default function Card({
    children,
    className = "",
    ...rest
}) {
    return (
        <div
            className={`
                rounded-lg
                shadow
                p-4
                ${className}
            `}
            {...rest}
        >
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};