import * as cls from "./Digits.module.scss";
import { useDigitsAnimation } from "./hooks/useDigitsAnimation";

interface DigitsProps {
    from: number;
    to: number;
}

export const Digits: React.FC<DigitsProps> = ({ from, to }) => {
    const [fromRef, toRef] = useDigitsAnimation(from, to);

    return (
        <div className={cls.Digits}>
            <div className={cls.From} ref={fromRef}>
                {/*{from}*/}
            </div>
            <div className={cls.To} ref={toRef}>
                {/*{to}*/}
            </div>
        </div>
    );
};
