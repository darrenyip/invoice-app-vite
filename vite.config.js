import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import macrosPlugin from "vite-plugin-babel-macros";
import envCompatible from "vite-plugin-env-compatible";
// https://vitejs.dev/config/
export default defineConfig({
    // tailwind: {
    //     plugins: ["macros"],
    //     config: "./src/tailwind.config.js",
    //     format: "auto",
    // },
    plugins: [
        react(),
        macrosPlugin(),
        envCompatible(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
});