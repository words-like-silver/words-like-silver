import { getNewArticles } from "../lib/cms/queries";
import MobileArticlesCarousel from "./mobile-article-carousel";
import VerticalArticle from "./vertical-article";

export default async function MoreArticles() {
    const latestArticles = await getNewArticles(100);
    return (
        <section className="my-16">
            <h2 className="mb-8 text-center text-4xl">FURTHER READING</h2>
            <div className="hidden grid-cols-4 justify-center gap-8 px-16 lg:grid">
                {latestArticles.map((article) => (
                    <VerticalArticle
                        includeReadMore
                        includeDescription
                        includeCategory
                        article={article}
                        key={article._rev}
                    />
                ))}
            </div>
            <MobileArticlesCarousel articles={latestArticles} />
        </section>
    );
}
