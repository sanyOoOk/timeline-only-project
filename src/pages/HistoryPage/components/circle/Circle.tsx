import clsx from "clsx";
import * as cls from "./Circle.module.scss";
import { useCircleRotation } from "./hooks/useCircleRotation";
import { getMinCircleSteps } from "./utils/getMinCircleSteps";
import { useMemo } from "react";
import { Crosshair } from "../crosshair/Crosshair";
import type { HistoryItem } from "../../type/HistoryItem";

interface CircleProps {
    items: HistoryItem[];
    selectedItem: number;
    onItemClick: (item: number) => void;
}

export const Circle: React.FC<CircleProps> = ({
    items,
    selectedItem,
    onItemClick,
}) => {
    const itemsCount = items.length;
    const segmentAngle = 360 / itemsCount;
    const circleRef = useCircleRotation(selectedItem, segmentAngle);
    const radius = useMemo(() => {
        return parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
                "--circle-radius",
            ),
        );
    }, []);

    return (
        <div className={cls.Circle} ref={circleRef}>
            {items.map((item, i) => {
                const rotateAngle = segmentAngle * i - 60;
                const steps = getMinCircleSteps(selectedItem, i, itemsCount);
                return (
                    <div
                        key={i}
                        onClick={() => onItemClick(i)}
                        style={{
                            transform: `rotate(${rotateAngle}deg) translate(${radius}px)`,
                        }}
                        className={clsx(
                            cls.Circle__item,
                            selectedItem === i && cls["Circle__item--active"],
                        )}
                    >
                        <div
                            style={{
                                transform: `rotate(${60 + steps * segmentAngle}deg)`,
                            }}
                            className={cls.Circle__item__content}
                        >
                            {i + 1}
                            <div
                                className={clsx(
                                    cls.Circle__item__content__subject,
                                    selectedItem === i &&
                                        cls[
                                            "Circle__item__content__subject--active"
                                        ],
                                )}
                            >
                                {item.section}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
