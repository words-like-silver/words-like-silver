import Image from "next/image";
import Link from "next/link";
import { getNavigationItems } from "../lib/cms/queries";

export default async function Navbar() {
    const navigationItems = await getNavigationItems();
    const halfOfNumNavItems = Math.floor(navigationItems.length / 2);
    return (
        <>
            <nav className="sticky top-0 z-20 grid-cols-[2fr,1fr,2fr] border-b border-black bg-beige px-16 font-sailing-club lg:grid lg:min-h-[145px] lg:py-4 lg:text-4xl">
                <div className="hidden items-center justify-around lg:flex">
                    {navigationItems
                        .slice(0, halfOfNumNavItems + 1)
                        .map((navItem) => {
                            return (
                                <Link
                                    href={"/" + navItem.slug.current}
                                    className="px-4 text-center"
                                    key={navItem.slug.current}
                                >
                                    {navItem.title}
                                </Link>
                            );
                        })}
                </div>
                <Link href="/" className="flex items-center py-2 lg:py-0">
                    <div className="relative mx-auto aspect-[3] w-52 lg:w-full">
                        <Image
                            src="/images/words_logo.png"
                            fill
                            alt="words like silver logo"
                        />
                    </div>
                </Link>
                <div className="hidden items-center justify-around lg:flex">
                    {navigationItems
                        .slice(halfOfNumNavItems + 1)
                        .map((navItem) => {
                            return (
                                <Link
                                    href={"/" + navItem.slug.current}
                                    className="px-4 text-center"
                                    key={navItem.slug.current}
                                >
                                    {navItem.title}
                                </Link>
                            );
                        })}
                </div>
            </nav>
            <div className="sticky top-36 z-20 hidden h-px -translate-y-px bg-beige lg:block"></div>
        </>
    );
}
