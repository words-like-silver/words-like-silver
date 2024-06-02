import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Article } from "../lib/cms/types";
import { processSanityBlock } from "../lib/text/process-sanity-block";

export default function VerticalArticle({
    article,
    includeDescription,
    includeReadMore,
    includeCategory,
    textAlign = "text-center",
}: {
    article: Article | null;
    includeDescription?: boolean;
    includeReadMore?: boolean;
    includeCategory?: boolean;
    textAlign?: string;
}) {
    if (!article) return null;

    return (
        <Link href={`/articles/${article.slug.current}`} className="block">
            {includeCategory && (
                <h3
                    className={clsx(
                        "mb-4 inline-block w-full text-center font-sailing-club text-2xl italic",
                        !article.categories.length && "invisible"
                    )}
                >
                    {article.categories?.at(0)?.title.toLocaleLowerCase() ||
                        "Uncategorized"}
                </h3>
            )}
            <div
                className={`relative mx-auto ${article.headerType === "book" ? "aspect-book" : "aspect-square"} h-64 lg:h-96 lg:w-auto`}
            >
                <Image
                    src={article.mainImage.asset.url}
                    fill
                    className="object-cover"
                    alt=""
                />
            </div>
            <div className={clsx("py-8 text-3xl underline", textAlign)}>
                {processSanityBlock(article.title[0])}
            </div>
            {includeDescription && (
                <p className="inline-block text-xl">{article.subhead}</p>
            )}
            {includeReadMore && (
                <div className="mt-8 block text-center font-sailing-club text-3xl italic underline">
                    read more
                </div>
            )}
        </Link>
    );
}
