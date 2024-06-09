import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Article } from "../lib/cms/types";
import { processSanityBlock } from "../lib/text/process-sanity-block";
import Star from "./svg/star";

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
        <div className="group row-span-5 grid grid-rows-subgrid">
            {includeCategory && (
                <h3
                    className={clsx(
                        "mb-4 inline-block w-full text-center font-sailing-club text-2xl italic !no-underline hover:!no-underline",
                        !article.categories.length && "invisible"
                    )}
                >
                    {article.categories?.at(0)?.title.toLocaleLowerCase() ||
                        "Uncategorized"}
                </h3>
            )}
            <Link
                href={`/articles/${article.slug.current}`}
                className={`relative mx-auto ${article.headerType === "book" ? "aspect-book" : "aspect-square"} h-64 transition-transform duration-300 group-hover:scale-[1.03] lg:h-96 lg:w-auto`}
            >
                <Image
                    src={article.mainImage.asset.url}
                    fill
                    className="object-cover"
                    alt=""
                />
                {article.starred === true && (
                    <div className="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:rotate-6 group-hover:scale-125">
                        <Star className="h-12 w-12" />
                    </div>
                )}
            </Link>
            <Link
                href={`/articles/${article.slug.current}`}
                className={clsx("py-8 text-3xl underline", textAlign)}
            >
                {processSanityBlock(article.title[0])}
            </Link>
            {includeDescription && (
                <p className="inline-block text-xl">{article.subhead}</p>
            )}
            {includeReadMore && (
                <Link
                    href={`/articles/${article.slug.current}`}
                    className="mt-8 block text-center font-sailing-club text-3xl italic underline"
                >
                    read more
                </Link>
            )}
        </div>
    );
}
