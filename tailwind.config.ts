import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#030712", // Deep Navy/Black
                surface: "#111827",    // Dark Blue-Grey
                primary: {
                    DEFAULT: "#2563eb",  // Royal Blue
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#0ea5e9",  // Sky Blue
                    foreground: "#ffffff",
                },
                glass: {
                    DEFAULT: "rgba(17, 24, 39, 0.7)",
                }
            },
            backgroundImage: {
                "radial-gradient": "radial-gradient(circle, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
