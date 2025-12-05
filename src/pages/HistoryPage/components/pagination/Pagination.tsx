import * as cls from "./Pagination.module.scss";
import { ArrowButton } from "../../../../shared/ui/ArrowButton/ArrowButton";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

interface PaginationProps {
    toggleLeft: () => void;
    toggleRight: () => void;
    current: number;
    total: number;
    setSelected: (i: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    toggleLeft,
    toggleRight,
    current,
    total,
    setSelected,
}) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <div className={cls.Pagination}>
            <div>
                <div
                    className={cls.Pagination__title}
                >{`0${current + 1}/0${total + 1}`}</div>
                <div className={cls.Pagination__buttons}>
                    <ArrowButton
                        direction="left"
                        size={isMobile ? "xs" : "m"}
                        onClick={toggleLeft}
                        disabled={current === 0}
                    />

                    <ArrowButton
                        direction="right"
                        size={isMobile ? "xs" : "m"}
                        onClick={toggleRight}
                        disabled={current === total}
                    />
                </div>
            </div>
            {isMobile && (
                <div className={cls.dots}>
                    {Array.from({ length: total + 1 }).map((_, i) => (
                        <div
                            key={i}
                            className={clsx(
                                cls.dots__dot,
                                i === current && cls["dots__dot--selected"],
                            )}
                            onClick={() => setSelected(i)}
                        ></div>
                    ))}
                </div>
            )}
        </div>
    );
};
