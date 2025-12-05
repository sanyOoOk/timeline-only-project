import * as cls from "./Crosshair.module.scss";

export const Crosshair: React.FC = () => {
    return (
        <div className={cls.Crosshair}>
            <div className={cls.crosshairVertical}></div>
            <div className={cls.crosshairHorizontal}></div>
        </div>
    );
};
