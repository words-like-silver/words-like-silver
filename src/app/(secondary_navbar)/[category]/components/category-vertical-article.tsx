import { Article } from "@/app/lib/cms/types";
import { processSanityBlock } from "@/app/lib/text/process-sanity-block";
import Star from "@/components/svg/star";
import Image from "next/image";
import Link from "next/link";

export default function CategoryVerticalArticle({
    article,
}: {
    article: Article | null;
}) {
    if (!article) return null;

    return (
        <div className="group row-span-5 grid w-64 grid-rows-subgrid md:w-80 2xl:w-96">
            <Link
                href={`/articles/${article.slug.current}`}
                className={`relative mx-auto ${article.headerType === "book" ? "aspect-book" : "aspect-square"} h-64 transition-transform duration-300 group-hover:scale-[1.03] md:h-80 2xl:h-96`}
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
                className="py-8 text-2xl underline lg:text-3xl"
            >
                {processSanityBlock(article.title[0])}
            </Link>
            <p className="inline-block text-xl">{article.subhead}</p>
            <Link
                href={`/articles/${article.slug.current}`}
                className="mt-8 block text-center font-sailing-club text-2xl italic underline lg:text-3xl"
            >
                read more
            </Link>
        </div>
    );
}
