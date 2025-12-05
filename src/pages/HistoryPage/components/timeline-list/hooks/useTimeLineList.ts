import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Swiper } from "swiper";
import type { HistoryEvent } from "../../../type/HistoryItem";

export const useTimeLineList = (events: HistoryEvent[]) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timeLineAnimationRef = useRef<gsap.core.Tween | null>(null);
    const firstRender = useRef(true);

    const swiperRef = useRef<Swiper | null>(null);

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        if (timeLineAnimationRef.current) timeLineAnimationRef.current.kill();

        timeLineAnimationRef.current = gsap.fromTo(
            containerRef.current,
            { opacity: 0 },
            { delay: 0.8, opacity: 1, duration: 0.8, ease: "linear" },
        );
    }, [events]);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            //@ts-ignore
            swiperRef.current.params.navigation!.prevEl = prevRef.current;
            //@ts-ignore
            swiperRef.current.params.navigation!.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();

            swiperRef.current.slideTo(0);
        }
    }, [events]);

    return { containerRef, swiperRef, prevRef, nextRef };
};
