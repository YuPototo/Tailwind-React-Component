import clsx from "clsx";
import React, { forwardRef } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
    size?: "small" | "normal";
    disabled?: boolean;
};

const classes = {
    base: "focus:outline-none transition ease-in-out duration-300",
    disabled: "opacity-50 cursor-not-allowed",
    size: {
        small: "px-2 py-1 text-sm",
        normal: "px-4 py-2",
    },
    variant: {
        primary:
            "bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white",
        secondary:
            "bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
    },
};

const Button = forwardRef<HTMLButtonElement, Props>(
    (
        {
            children,
            variant = "primary",
            size = "normal",
            disabled = false,
            type = "button",
            className,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled}
                className={clsx(
                    classes.base,
                    classes.size[size],
                    classes.variant[variant],
                    disabled && classes.disabled,
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;
