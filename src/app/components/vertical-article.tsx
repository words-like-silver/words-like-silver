import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import { Article } from "../lib/cms/types";
import { processSanityBlock } from "../lib/text/process-sanity-block";
import Star from "./svg/star";

export default function VerticalArticle({
    article,
    includeDescription,
    includeReadMore,
    includeCategory,
    textAlign = "text-center",
    additionalClassName,
    style,
}: {
    article: Article | null;
    includeDescription?: boolean;
    includeReadMore?: boolean;
    includeCategory?: boolean;
    textAlign?: string;
    additionalClassName?: string;
    style?: CSSProperties;
}) {
    // Extra check for draft articles
    if (!article || !article.slug?.current) return null;

    return (
        <div
            className={clsx(
                "row-span-5 mb-12 grid grid-rows-subgrid lg:mb-16",
                additionalClassName
            )}
            style={style}
        >
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
                className={`group relative mx-auto aspect-square w-full transition-transform duration-300 hover:scale-[1.03]`}
            >
                <Image
                    src={article.mainImage?.asset.url}
                    fill
                    className={`${article.headerType === "book" ? "object-contain" : "object-cover"}`}
                    alt={article.mainImage.alt}
                />
                {article.starred === true && (
                    <div className="absolute left-0 top-0 aspect-book h-full translate-x-1/4">
                        <div className="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-125">
                            <Star className="h-12 w-12" />
                        </div>
                    </div>
                )}
            </Link>
            <Link
                href={`/articles/${article.slug.current}`}
                className={clsx(
                    "mt-6 text-xl lg:mt-8 lg:text-2xl",
                    textAlign,
                    article.categories
                        .map((category) => category.title)
                        .includes("BOOKS") && "px-8"
                )}
            >
                {processSanityBlock(article.title[0])}
            </Link>
            {includeDescription && !!article.subhead && (
                <p
                    className={clsx(
                        "mt-4 inline-block text-center lg:text-xl",
                        article.categories
                            .map((category) => category.title)
                            .includes("BOOKS") && "px-16"
                    )}
                >
                    {article.subhead}
                </p>
            )}
            {includeReadMore && (
                <Link
                    href={`/articles/${article.slug.current}`}
                    className="mt-6 block text-center font-sailing-club text-2xl italic underline lg:mt-8 lg:text-3xl"
                >
                    read more
                </Link>
            )}
        </div>
    );
}
