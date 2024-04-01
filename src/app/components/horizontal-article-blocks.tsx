import Image from "next/image";
import Link from "next/link";
import { getHorizontalArticles } from "../lib/cms/queries";

export default async function HorizontalArticleBlocks() {
    const articles = await getHorizontalArticles();
    if (!articles || !articles.length) return null;

    return (
        <section className="flex gap-8 px-16 text-sm leading-none">
            {articles.map((article) => (
                <Link
                    href={`/articles/${article.slug.current}`}
                    key={article._rev}
                    className="flex flex-1 border border-black"
                >
                    <div className="relative aspect-square w-32">
                        <Image src={article.mainImage.asset.url} fill alt="" />
                    </div>
                    <div className="px-4 pb-2 pt-4">{article.title}</div>
                </Link>
            ))}
        </section>
    );
}
