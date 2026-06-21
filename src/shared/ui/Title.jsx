import PropTypes from "prop-types";

export default function Title({
    children,
    className = "",
    ...rest
}) {
    return (
        <h1
            className={`
                text-2xl
                font-bold
                ${className}
            `}
            {...rest}
        >
            {children}
        </h1>
    );
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};