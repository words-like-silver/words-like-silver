import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const pages = [
        "NEWS",
        "ABOUT",
        "BOOKS",
        "TRAVEL",
        "STYLE",
        "ARTS & CREATIVITY",
        "SHOPPING",
    ];
    const halfPages = Math.floor(pages.length / 2);
    return (
        <>
            <nav className="hidden border-b border-black z-20 min-h-36 bg-beige sticky top-0 lg:grid grid-cols-[2fr,1fr,2fr] px-16 lg:text-4xl py-4 mt-12">
                <div className="flex justify-around items-center">
                    {pages.slice(0, halfPages + 1).map((page) => {
                        return (
                            <Link href="/" className="px-4" key={page}>
                                {page}
                            </Link>
                        );
                    })}
                </div>
                <div className="flex items-center">
                    <div className="relative w-full aspect-[3] mx-auto">
                        <Image
                            src="/images/words_logo.png"
                            fill
                            alt="words like silver logo"
                        />
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    {pages.slice(halfPages + 1).map((page) => {
                        return (
                            <Link href="/" className="px-4" key={page}>
                                {page}
                            </Link>
                        );
                    })}
                </div>
            </nav>
            <div className="bg-beige mb-16 sticky h-px top-36 -translate-y-px z-20"></div>
        </>
    );
}
