import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Article } from "../lib/cms/types";
import { processSanityBlock } from "../lib/text/process-sanity-block";

export default async function FeatureArticle({
    article,
    background,
}: {
    article: Article | undefined;
    background?: boolean;
}) {
    if (!article) return null;
    return (
        <Link
            href={`/articles/${article.slug.current}`}
            className={
                "group relative block aspect-square w-full transition-transform"
            }
        >
            <div className={clsx("h-full w-full", background && "p-4 lg:p-6")}>
                <div className="relative h-full w-full">
                    <Image
                        src={article.mainImage.asset.url}
                        alt="feature article"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="absolute -bottom-12 w-full px-4 lg:bottom-24">
                <div className="mx-auto max-w-sm border border-black bg-beige/80 py-4">
                    <h2
                        className="text-center text-2xl group-hover:underline lg:text-3xl"
                        dangerouslySetInnerHTML={{
                            __html: processSanityBlock(article.title[0]),
                        }}
                    ></h2>
                </div>
            </div>
            {background && (
                <div className="absolute left-0 top-0 -z-10 h-full w-full -translate-x-2 translate-y-1 lg:-translate-x-3 lg:translate-y-2">
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
