import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                "3xl": "2000px",
            },
            maxWidth: {
                "8xl": "90rem",
                "9xl": "100rem",
                "10xl": "120rem",
            },
            fontFamily: {
                "frys-baskerville": "var(--font-frys-baskerville)",
                "sailing-club": "var(--font-sailing-club)",
                calligraphy: "var(--desirable-caligraphy)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                beige: "#FAF8F1",
                "dark-green": "#121903",
                yellow: "rgba(214,144,16)",
            },
            aspectRatio: {
                book: "0.65",
            },
            animation: {
                "fade-in-up": "fade-in-up 0.5s ease-in-out both",
                "underline-appear": "underline-appear 0.35s ease both",
            },
            keyframes: {
                "fade-in-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(1rem)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "underline-appear": {
                    from: {
                        transform: "scaleX(0)",
                    },
                    to: {
                        transform: "scaleX(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
