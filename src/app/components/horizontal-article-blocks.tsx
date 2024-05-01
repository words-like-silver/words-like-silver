import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { getHorizontalArticles } from "../lib/cms/queries";
import { processSanityBlock } from "../lib/text/process-sanity-block";

export default async function HorizontalArticleBlocks() {
    const articles = await getHorizontalArticles();
    if (!articles || !articles.length) return null;

    return (
        <section className="flex flex-wrap gap-8 pr-16 text-sm leading-none">
            <div className="flex w-72 items-center justify-center">
                <div className="relative mx-auto aspect-square h-24">
                    <Image
                        src="/images/words_logo_mini.png"
                        alt="words like silver logo"
                        fill
                    />
                </div>
            </div>
            {articles.map((article, index) => (
                <Link
                    href={`/articles/${article.slug.current}`}
                    key={"horizontal-article-" + article._id}
                    className={clsx(
                        "flex flex-1 border border-black",
                        index === 4 && "hidden 3xl:flex",
                        index === 3 && "hidden 2xl:flex",
                        index === 2 && "hidden xl:flex",
                        index === 1 && "hidden lg:flex"
                    )}
                >
                    <div className="relative aspect-square w-32">
                        <Image src={article.mainImage.asset.url} fill alt="" />
                    </div>
                    <div className="mb-2 overflow-hidden px-4 pt-4">
                        {processSanityBlock(article.title[0])}
                    </div>
                </Link>
            ))}
        </section>
    );
}
