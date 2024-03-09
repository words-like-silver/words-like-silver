import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function FeatureArticle({
    background,
}: {
    background?: boolean;
}) {
    return (
        <Link
            href="/"
            className={clsx(
                "relative w-full group transition-transform aspect-square",
                background && "p-6"
            )}
        >
            <div className="w-full h-full relative">
                <Image
                    src="/images/feature_article.png"
                    alt="feature article"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute bottom-24 px-4 w-full">
                <div className="bg-beige/80 py-4 mx-auto max-w-sm border border-black">
                    <h2 className="text-3xl group-hover:underline text-center">
                        This Sumptuous Boutique Hotel in Charleston Is a
                        Timeless Escape
                    </h2>
                </div>
            </div>
            {background && (
                <div className="absolute top-0 -z-10 left-0 w-full h-full -translate-x-3 translate-y-2">
                    <Image
                        src="/images/paper_background.png"
                        alt="sheet of paper"
                        fill
                    />
                </div>
            )}
        </Link>
    );
}
