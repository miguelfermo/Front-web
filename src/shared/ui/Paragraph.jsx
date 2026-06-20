import PropTypes from "prop-types";

export default function Paragraph({
    children,
    className = "",
    ...rest
}) {
    return (
        <p
            className={`
                text-gray-700
                ${className}
            `}
            {...rest}
        >
            {children}
        </p>
    );
}

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};