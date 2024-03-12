import ArticleCarousel from "./article-carousel";
import VerticalArticle from "./vertical-article";

export default function MoreArticles() {
    const articles = [
        "Mountain Sounds is Coming to Shelves - Here's What You Need to Know",
        "Happy Place by Emily Henry",
        "I Spent My First-Ever Adult Vacation at This Gorgeous Hostel in Costa Rica",
        "I Spent My First-Ever Adult Vacation at This Gorgeous Hostel in Costa Rica",
    ];
    return (
        <section className="my-16">
            <h2 className="text-center mb-8 text-4xl">FURTHER READING</h2>
            <div className="hidden lg:grid grid-cols-4 px-16 gap-8 justify-center">
                {articles.map((article) => (
                    <VerticalArticle
                        includeReadMore
                        includeDescription
                        article={article}
                        key={article}
                    />
                ))}
            </div>
            <ArticleCarousel />
        </section>
    );
}
