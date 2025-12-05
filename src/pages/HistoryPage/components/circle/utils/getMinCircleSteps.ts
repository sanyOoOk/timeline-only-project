export const getMinCircleSteps = (from: number, to: number, total: number) => {
    const forward = (from - to + total) % total;
    const backward = (to - from + total) % total;
    const steps = Math.min(forward, backward);
    const sign = forward <= backward ? 1 : -1;
    return sign * steps;
};
