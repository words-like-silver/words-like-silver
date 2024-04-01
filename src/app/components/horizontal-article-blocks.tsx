import Image from "next/image";
import Link from "next/link";
import { getHorizontalArticles } from "../lib/cms/queries";

export default async function HorizontalArticleBlocks() {
    const homepage = await getHorizontalArticles();
    console.log(homepage);
    if (!homepage || !homepage[0] || !homepage[0].top_bar_articles) return null;
    const articles = homepage[0].top_bar_articles;

    return (
        <section className="flex gap-8 px-16 text-sm leading-none">
            {articles.map((article) => (
                <Link
                    href="/"
                    key={article._rev}
                    className="flex border border-black flex-1"
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
