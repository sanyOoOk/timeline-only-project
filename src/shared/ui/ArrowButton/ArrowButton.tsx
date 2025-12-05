import clsx from "clsx";
import { ArrowIcon } from "../ArrowIcon/ArrowIcon";
import * as cls from "./ArrowButton.module.scss";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    direction?: "left" | "right";
    size?: "m" | "s" | "xs";
    theme?: "primary" | "secondary";
    className?: string;
    disabled?: boolean;
}

export const ArrowButton = forwardRef<HTMLButtonElement, ArrowButtonProps>(
    (
        {
            direction = "left",
            size = "m",
            theme = "primary",
            disabled = false,
            className,
            ...otherProps
        },
        ref,
    ) => {
        return (
            <button
                className={clsx(
                    cls.ArrowButton,
                    cls[size],
                    cls[theme],
                    disabled && cls["ArrowButton--disabled"],
                    className,
                )}
                ref={ref}
                disabled={disabled}
                {...otherProps}
            >
                <ArrowIcon direction={direction} size={size} />
            </button>
        );
    },
);
