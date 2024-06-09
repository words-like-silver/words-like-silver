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
    largerImage,
}: {
    article: Article | null;
    includeDescription?: boolean;
    includeReadMore?: boolean;
    includeCategory?: boolean;
    textAlign?: string;
    largerImage?: boolean;
}) {
    if (!article) return null;

    return (
        <div className="group row-span-5 grid grid-rows-subgrid">
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
            <Link
                href={`/articles/${article.slug.current}`}
                className={`relative mx-auto aspect-square w-full transition-transform duration-300 group-hover:scale-[1.03]`}
            >
                <Image
                    src={article.mainImage.asset.url}
                    fill
                    className={`${article.headerType === "book" ? "object-contain" : "object-cover"}`}
                    alt=""
                />
                {article.starred === true && (
                    <div className="absolute left-0 top-0 aspect-book h-full translate-x-1/4">
                        <div className="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:rotate-6 group-hover:scale-125">
                            <Star className="h-12 w-12" />
                        </div>
                    </div>
                )}
            </Link>
            <Link
                href={`/articles/${article.slug.current}`}
                className={clsx(
                    "py-8 text-2xl underline lg:text-3xl",
                    textAlign
                )}
            >
                {processSanityBlock(article.title[0])}
            </Link>
            {includeDescription && (
                <p className="inline-block text-xl">{article.subhead}</p>
            )}
            {includeReadMore && (
                <Link
                    href={`/articles/${article.slug.current}`}
                    className="mt-8 block text-center font-sailing-club text-2xl italic underline lg:text-3xl"
                >
                    read more
                </Link>
            )}
        </div>
    );
}
