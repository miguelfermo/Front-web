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
                mt-4
                p-4
                max-w-sm
                bg-white
                flex
                flex-col
                min-w-[19%]
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