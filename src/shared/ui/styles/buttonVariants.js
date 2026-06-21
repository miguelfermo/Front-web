export function getButtonVariant(variant = "primary") {
    const variants = {
        primary: {
            background: "bg-green-500",
            hoverBackground: "hover:bg-green-600",
            text: "text-white",
        },
        secondary: {
            background: "bg-gray-100",
            hoverBackground: "hover:bg-gray-200",
            text: "text-gray-700",
        },
        danger: {
            background: "bg-red-500",
            hoverBackground: "hover:bg-red-600",
            text: "text-white",
        },
    };

    return variants[variant] || variants.primary;
}