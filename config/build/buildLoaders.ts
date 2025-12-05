import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCSSLoader } from "./loaders/buildCSSLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
    const cssLoader = buildCSSLoader(options.isDev);
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    return [fileLoader, svgLoader, typescriptLoader, ...cssLoader];
}
