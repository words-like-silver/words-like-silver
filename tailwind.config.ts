import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
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
            },
            aspectRatio: {
                book: "0.65",
            },
        },
    },
    plugins: [],
};
export default config;
