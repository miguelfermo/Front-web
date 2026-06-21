import PropTypes from "prop-types";

export default function Input({
    label,
    name,
    value,
    onChange,
    type = "text",
    ...rest
}) {
    return (
        <div className="flex flex-col gap-1">
            <label
                htmlFor={name}
                className="text-sm font-medium text-gray-700"
            >
                {label}
            </label>

            <input
                id={name}
                type={type}
                placeholder={label}
                name={name}
                value={value}
                onChange={onChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                {...rest}
            />
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired, onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
};