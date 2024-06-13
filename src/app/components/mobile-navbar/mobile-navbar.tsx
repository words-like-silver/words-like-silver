"use client";
import { NavigationItem } from "@/app/lib/cms/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function MobileNavbar({
    navigationItems,
}: {
    navigationItems: NavigationItem[];
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => setIsAnimating(false), 400);
        }
    }, [isOpen, setIsAnimating]);
    return (
        <>
            <button
                className="flex h-12 w-12 flex-col items-center justify-center gap-2"
                onClick={() => {
                    if (isOpen) {
                        setIsAnimating(true);
                        setIsOpen(false);
                    } else {
                        setIsOpen(true);
                    }
                }}
            >
                <div className="h-px w-full bg-black"></div>
                <div className="h-px w-full bg-black"></div>
                <div className="h-px w-full bg-black"></div>
            </button>
            {(isOpen || isAnimating) &&
                createPortal(
                    <nav
                        className={clsx(
                            "absolute left-0 top-20 flex w-min flex-col gap-4 bg-beige px-6 py-4 font-sailing-club text-2xl shadow-lg lg:hidden",
                            isAnimating && "animate-slide-to-left",
                            isOpen && "animate-slide-from-left"
                        )}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {navigationItems.map((navItem) => (
                            <Link
                                href={navItem.slug.current}
                                key={"mobile-nav-" + navItem.title}
                            >
                                {navItem.title}
                            </Link>
                        ))}
                    </nav>,
                    document.querySelector("#navbar") || document.body
                )}
        </>
    );
}
