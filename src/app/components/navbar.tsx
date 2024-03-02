import Image from "next/image";

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
        <nav className="grid grid-cols-[2fr,1fr,2fr] mx-16 lg:text-4xl my-16">
            <div className="flex justify-between items-center">
                {pages.slice(0, halfPages + 1).map((page) => {
                    return <div className="px-4">{page}</div>;
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
                    return <div className="px-4">{page}</div>;
                })}
            </div>
        </nav>
    );
}
