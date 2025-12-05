import type { HistoryEvent } from "../../type/HistoryItem";
import * as cls from "./TimeLineList.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowButton } from "../../../../shared/ui/ArrowButton/ArrowButton";
import { useTimeLineList } from "./hooks/useTimeLineList";

interface TimeLineListProps {
    events: HistoryEvent[];
}

export const TimelineList: React.FC<TimeLineListProps> = ({ events }) => {
    const { containerRef, prevRef, nextRef, swiperRef } =
        useTimeLineList(events);
    return (
        <div className={cls.TimelineList} ref={containerRef}>
            <ArrowButton
                direction="left"
                theme="secondary"
                size="s"
                ref={prevRef}
                className={cls.TimelineList__prevBtn}
            />
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation, Pagination]}
                slidesPerView={1.5}
                spaceBetween={40}
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 80,
                    },
                }}
            >
                {events.map((event, index) => (
                    <SwiperSlide key={index} className={cls.slide}>
                        <div className={cls.TimelineItem}>
                            <div className={cls.TimelineItem__year}>
                                {event.year}
                            </div>
                            <div className={cls.TimelineItem__text}>
                                {event.description}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ArrowButton
                direction="right"
                theme="secondary"
                size="s"
                ref={nextRef}
                className={cls.TimelineList__nextBtn}
            />
        </div>
    );
};
