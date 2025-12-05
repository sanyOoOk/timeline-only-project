import { useRef, useEffect } from "react";
import gsap from "gsap";

export const useDigitsAnimation = (from: number, to: number) => {
    const fromRef = useRef<HTMLDivElement>(null);
    const toRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!fromRef.current || !toRef.current) return;

        const fromTween = gsap.fromTo(
            fromRef.current,
            { innerText: Number(fromRef.current.innerText) || from },
            {
                innerText: from,
                duration: 1.4,
                ease: "power2.inOut",
                snap: { innerText: 1 },
            },
        );

        const toTween = gsap.fromTo(
            toRef.current,
            { innerText: Number(toRef.current.innerText) || to },
            {
                innerText: to,
                duration: 1,
                ease: "power2.inOut",
                snap: { innerText: 1 },
            },
        );

        return () => {
            fromTween.kill();
            toTween.kill();
        };
    }, [from, to]);

    return [fromRef, toRef];
};
