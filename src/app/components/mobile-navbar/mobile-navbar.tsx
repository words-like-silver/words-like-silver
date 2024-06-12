"use client";
import { NavigationItem } from "@/app/lib/cms/types";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function MobileNavbar({
    navigationItems,
}: {
    navigationItems: NavigationItem[];
}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                className="flex h-12 w-12 flex-col items-center justify-center gap-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="h-px w-full bg-black"></div>
                <div className="h-px w-full bg-black"></div>
                <div className="h-px w-full bg-black"></div>
            </button>
            {isOpen &&
                createPortal(
                    <nav className="fixed left-0 top-12 flex w-full flex-col items-center gap-4 bg-beige py-4">
                        {navigationItems.map((navItem) => (
                            <Link
                                href={navItem.slug.current}
                                key={"mobile-nav-" + navItem.title}
                            >
                                {navItem.title}
                            </Link>
                        ))}
                    </nav>,
                    document.body
                )}{" "}
        </>
    );
}
