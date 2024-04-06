import { getFeaturedArticleRow } from "../lib/cms/queries";
import MobileArticlesCarousel from "./mobile-article-carousel";
import VerticalArticle from "./vertical-article";

export default async function FeaturedArticlesBlock() {
    const articles = await getFeaturedArticleRow();
    if (!articles || !articles.length) return null;
    return (
        <section className="bg-dark-green py-8 text-white">
            <h2 className="mb-8 text-center text-3xl">FEATURED</h2>
            <div className="hidden grid-cols-3 justify-center gap-8 px-16 lg:grid">
                {articles.map((article, index) => (
                    <VerticalArticle
                        includeCategory
                        article={article}
                        key={index}
                    />
                ))}
            </div>
            <MobileArticlesCarousel articles={articles} />
        </section>
    );
}
