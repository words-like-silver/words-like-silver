"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({
    slug,
    title,
}: {
    slug: string;
    title: string;
}) {
    const pathname = usePathname();
    const isActive = pathname === `/${slug}`;

    return (
        <Link
            href={"/" + slug}
            className={clsx(
                "relative mx-4 text-center hover:underline hover:[text-decoration-color:grey]"
            )}
        >
            {title}
            {isActive && (
                <div className="animate-underline-appear absolute -bottom-[0.5px] left-0 h-1 w-full origin-left bg-black"></div>
            )}
        </Link>
    );
}
