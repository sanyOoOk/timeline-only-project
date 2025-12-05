import React from "react";

interface ArrowIconProps {
    direction?: "left" | "right";
    size?: "m" | "s" | "xs";
}

const SIZE_MAP = {
    m: 14,
    s: 10,
    xs: 8,
} as const;

export const ArrowIcon: React.FC<ArrowIconProps> = ({
    direction = "left",
    size = "m",
}) => {
    const path =
        direction === "left"
            ? "M8.49988 0.75L2.24988 7L8.49988 13.25"
            : "M1.50012 0.75L7.75012 7L1.50012 13.25";

    const height = SIZE_MAP[size];
    const width = (10 / 14) * height;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={path} stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};
