import Image from "next/image";
import Link from "next/link";
import { Article } from "../lib/cms/types";
import { processSanityBlock } from "../lib/text/process-sanity-block";

export default function VerticalArticle({
    article,
    includeDescription,
    includeReadMore,
    includeCategory,
}: {
    article: Article;
    includeDescription?: boolean;
    includeReadMore?: boolean;
    includeCategory?: boolean;
}) {
    return (
        <Link href={`/articles/${article.slug.current}`} className="block">
            {includeCategory && (
                <h3 className="mb-4 inline-block w-full text-center font-sailing-club text-3xl italic">
                    {article.categories.at(0)?.title}
                </h3>
            )}
            <div className="relative mx-auto aspect-square h-64 lg:h-auto lg:w-full">
                <Image
                    src={article.mainImage.asset.url}
                    fill
                    className="object-cover"
                    alt=""
                />
            </div>
            <div
                className="py-8 text-center text-3xl underline"
                dangerouslySetInnerHTML={{
                    __html: processSanityBlock(article.title[0]),
                }}
            ></div>
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
        </Link>
    );
}
