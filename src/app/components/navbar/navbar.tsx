import { getNavigationItems } from "@/app/lib/cms/queries";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "../mobile-navbar/mobile-navbar";
import NavLink from "./components/nav-link";
import SearchBar from "./components/search-bar";

export default async function Navbar({
    secondary,
    hideSearchBar,
}: {
    secondary?: boolean;
    hideSearchBar?: boolean;
}) {
    const navigationItems = await getNavigationItems();
    const halfOfNumNavItems = Math.floor(navigationItems.length / 2);
    return (
        <>
            <nav
                className="sticky top-0 z-30 flex bg-beige font-sailing-club lg:min-h-[145px] lg:py-4"
                id="navbar"
            >
                {!hideSearchBar && <SearchBar />}
                <div
                    className={clsx(
                        "flex-1 lg:text-xl xl:text-2xl 2xl:text-3xl",
                        secondary
                            ? "flex justify-around"
                            : "grid-cols-[2fr,1fr,2fr] lg:grid"
                    )}
                >
                    <div
                        className={clsx(
                            "hidden items-center justify-around lg:flex",
                            secondary && "order-2 flex-1"
                        )}
                    >
                        {navigationItems
                            .slice(0, halfOfNumNavItems + 1)
                            .map((navItem) => {
                                return (
                                    <NavLink
                                        slug={navItem.slug.current}
                                        title={navItem.title}
                                        key={"navitem" + navItem.slug.current}
                                    />
                                );
                            })}
                    </div>
                    <div className="absolute left-6 top-4 z-30 lg:hidden">
                        <MobileNavbar navigationItems={navigationItems} />
                    </div>
                    <Link
                        href="/"
                        className={clsx(
                            "mx-auto flex items-center py-2 lg:mx-6 lg:py-0",
                            secondary && "order-1 w-80"
                        )}
                    >
                        <div className="relative mx-auto aspect-[3] h-16 lg:h-14 xl:h-16 2xl:h-24 lg:w-full">
                            <Image
                                src="/images/words_logo.png"
                                fill
                                alt="words like silver logo"
                            />
                        </div>
                    </Link>
                    <div
                        className={clsx(
                            "hidden items-center justify-around lg:flex",
                            secondary && "order-3 flex-1"
                        )}
                    >
                        {navigationItems
                            .slice(halfOfNumNavItems + 1)
                            .map((navItem) => {
                                return (
                                    <NavLink
                                        slug={navItem.slug.current}
                                        title={navItem.title}
                                        key={"navitem" + navItem.slug.current}
                                    />
                                );
                            })}
                    </div>
                </div>
            </nav>
        </>
    );
}
