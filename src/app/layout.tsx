import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const frysBaskerville = localFont({
    src: "../fonts/frys_baskerville_regular.otf",
    variable: "--font-frys-baskerville",
    weight: "400",
    display: "swap",
});

const sailingClub = localFont({
    src: [
        {
            path: "../fonts/SailingClub-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/SailingClub-Italic.woff",
            weight: "400",
            style: "italic",
        },
    ],
    variable: "--font-sailing-club",
    display: "swap",
});

const desirableCalligraphy = localFont({
    src: "../fonts/Desirable Calligraphy.otf",
    weight: "400",
    variable: "--desirable-calligraphy",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        template: "%s | Words Like Silver",
        default: "Words Like Silver",
    },
    description: "A Blog",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${frysBaskerville.variable} ${sailingClub.variable} ${desirableCalligraphy.variable} bg-beige font-frys-baskerville text-black`}
            >
                {children}
            </body>
        </html>
    );
}
