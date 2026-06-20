import PropTypes from "prop-types";

export default function Subtitle({
    children,
    className = "",
    ...rest
}) {
    return (
        <h2
            className={`
                text-xl
                font-semibold
                ${className}
            `}
            {...rest}
        >
            {children}
        </h2>
    );
}

Subtitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};