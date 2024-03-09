import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import ArticleBlocks from "./components/article-blocks";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
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
    title: "Words Like Silver",
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
                className={`${frysBaskerville.variable} ${sailingClub.variable} ${desirableCalligraphy.variable} font-sailing-club bg-beige text-lg text-black`}
            >
                <div className="hidden lg:flex">
                    <div className="aspect-square relative h-32 mt-16 ml-16">
                        <Image
                            src="/images/words_logo_mini.png"
                            alt="words like silver logo"
                            fill
                        />
                    </div>
                    <ArticleBlocks />
                </div>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
