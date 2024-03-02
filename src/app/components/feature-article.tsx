import Image from "next/image";
import Link from "next/link";

export default function FeatureArticle() {
    return (
        <Link
            href="/"
            className="relative w-full group hover:rotate-2 transition-transform aspect-square"
        >
            <Image
                src="/images/feature_article.png"
                alt="feature article"
                fill
                className="object-cover"
            />
            <div className="absolute bottom-24 px-4 w-full">
                <div className="bg-beige/80 py-4 mx-auto max-w-sm">
                    <h2 className="text-3xl group-hover:underline text-center">
                        This Sumptuous Boutique Hotel in Charleston Is a
                        Timeless Escape
                    </h2>
                </div>
            </div>
        </Link>
    );
}
