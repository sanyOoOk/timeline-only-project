declare module "*.scss" {
    interface IClassNames {
        [index: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg?react" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGElement>>;
    export default SVG;
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
