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
        <nav className="hidden lg:grid grid-cols-[2fr,1fr,2fr] mx-16 lg:text-4xl my-16">
            <div className="flex justify-between items-center">
                {pages.slice(0, halfPages + 1).map((page) => {
                    return (
                        <Link href="/" className="px-4">
                            {page}
                        </Link>
                    );
                })}
            </div>
            <div>
                <div className="relative h-32 mx-auto w-56">
                    <Image
                        src="/images/words_logo.png"
                        fill
                        alt="words like silver logo"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center">
                {pages.slice(halfPages + 1).map((page) => {
                    return (
                        <Link href="/" className="px-4">
                            {page}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
