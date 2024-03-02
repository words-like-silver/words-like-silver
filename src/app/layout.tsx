import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import ArticleBlocks from "./components/article-blocks";
import Navbar from "./components/navbar";
import "./globals.css";

const frysBaskerville = localFont({
    src: "../fonts/frys_baskerville.otf",
    variable: "--font-frys-baskerville",
    weight: "400",
    display: "swap",
});

const sailingClub = localFont({
    src: "../fonts/sailing-club-regular.ttf",
    variable: "--font-sailing-club",
    weight: "400",
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
                className={`${frysBaskerville.variable} ${sailingClub.variable} font-sailing-club bg-beige text-lg text-black`}
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
            </body>
        </html>
    );
}
