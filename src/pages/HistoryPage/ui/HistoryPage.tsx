import * as cls from "./HistoryPage.module.scss";
import { Circle } from "../components/circle/Circle";
import { Pagination } from "../components/pagination/Pagination";
import { TimelineList } from "../components/timeline-list/TimeLineList";
import { useHistoryPage } from "../hooks/useHistoryPage";
import { Digits } from "../components/digits/Digits";
import { Crosshair } from "../components/crosshair/Crosshair";

const Title = () => {
    return (
        <h1 className={cls.Title}>
            Исторические <br /> даты
        </h1>
    );
};

export const HistoryPage = () => {
    const {
        items,
        onItemClick,
        selectedItem,
        toggleLeft,
        toggleRight,
        setSelected,
    } = useHistoryPage();

    console.log(items);

    console.log(cls);

    return (
        <div className={cls.HistoryPage}>
            <Crosshair />
            <Circle
                items={items}
                selectedItem={selectedItem}
                onItemClick={onItemClick}
            />
            <Title />
            <Digits
                from={items[selectedItem].from}
                to={items[selectedItem].to}
            />
            <div className={cls.OffsetWrapper}>
                <Pagination
                    current={selectedItem}
                    total={items.length - 1}
                    toggleLeft={toggleLeft}
                    toggleRight={toggleRight}
                    setSelected={setSelected}
                />
                <TimelineList events={items[selectedItem].events} />
            </div>
        </div>
    );
};
