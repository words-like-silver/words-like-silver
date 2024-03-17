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
            <nav className="sticky top-0 z-20 grid-cols-[2fr,1fr,2fr] border-b border-black bg-beige px-16 lg:grid lg:min-h-[145px] lg:py-4 lg:text-4xl">
                <div className="hidden items-center justify-around lg:flex">
                    {pages.slice(0, halfPages + 1).map((page) => {
                        return (
                            <Link
                                href="/"
                                className="px-4 text-center"
                                key={page}
                            >
                                {page}
                            </Link>
                        );
                    })}
                </div>
                <div className="flex items-center py-2 lg:py-0">
                    <div className="relative mx-auto aspect-[3] w-52 lg:w-full">
                        <Image
                            src="/images/words_logo.png"
                            fill
                            alt="words like silver logo"
                        />
                    </div>
                </div>
                <div className="hidden items-center justify-around lg:flex">
                    {pages.slice(halfPages + 1).map((page) => {
                        return (
                            <Link
                                href="/"
                                className="px-4 text-center"
                                key={page}
                            >
                                {page}
                            </Link>
                        );
                    })}
                </div>
            </nav>
            <div className="sticky top-36 z-20 hidden h-px -translate-y-px bg-beige lg:block"></div>
        </>
    );
}
