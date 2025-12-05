import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const useCircleRotation = (
    selectedItem: number,
    segmentAngle: number,
): React.RefObject<HTMLDivElement | null> => {
    const circleRef = useRef<HTMLDivElement>(null);
    const currentAngleRef = useRef(0);
    const circleAnimationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        if (circleAnimationRef.current) circleAnimationRef.current.kill();

        const target = 360 - segmentAngle * selectedItem;
        let delta = (target - currentAngleRef.current) % 360;

        if (delta >= 180) delta -= 360;
        if (delta <= -180) delta += 360;

        circleAnimationRef.current = gsap.to(circleRef.current, {
            rotation: `+=${delta}`,
            duration: 1.4,
            ease: "power3.inOut",
            transformOrigin: "center center",
            onUpdate: () => {
                currentAngleRef.current =
                    (gsap.getProperty(
                        circleRef.current,
                        "rotation",
                    ) as number) % 360;
            },
        });
    }, [selectedItem, segmentAngle]);

    return circleRef;
};
