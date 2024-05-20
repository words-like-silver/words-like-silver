import { getNavigationItems } from "@/app/lib/cms/queries";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./components/nav-link";

export default async function Navbar({
    secondary,
    hideSearchBar,
}: {
    secondary?: boolean;
    hideSearchBar?: boolean;
}) {
    const navigationItems = await getNavigationItems();
    const halfOfNumNavItems = Math.floor(navigationItems.length / 2);
    //TODO: show active navigation tab
    return (
        <>
            <nav className="sticky top-0 z-20 flex border-b border-black bg-beige font-sailing-club lg:min-h-[145px] lg:py-4">
                {!hideSearchBar && (
                    <div className="hidden w-72 flex-col items-center justify-center px-8 font-frys-baskerville lg:flex">
                        <input className="h-10 w-full rounded-xl border-2 border-black bg-beige px-2" />
                    </div>
                )}

                <div
                    className={clsx(
                        "flex-1 px-16 lg:text-4xl",
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
                    <Link
                        href="/"
                        className={clsx(
                            "flex items-center py-2 lg:py-0",
                            secondary && "order-1 w-80"
                        )}
                    >
                        <div className="relative mx-auto aspect-[3] w-52 lg:w-full">
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
            <div className="sticky top-36 z-20 hidden h-px -translate-y-px bg-beige lg:block"></div>
        </>
    );
}
