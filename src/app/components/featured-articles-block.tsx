import FeaturedArticlesCarousel from "./article-carousel";
import VerticalArticle from "./vertical-article";

export default function FeaturedArticlesBlock() {
    const articles = [
        "Mountain Sounds is Coming to Shelves - Here's What You Need to Know",
        "Happy Place by Emily Henry",
        "I Spent My First-Ever Adult Vacation at This Gorgeous Hostel in Costa Rica",
    ];
    return (
        <section className="bg-dark-green py-8 text-white">
            <h2 className="text-center text-3xl mb-8">FEATURED</h2>
            <div className="hidden lg:grid grid-cols-3 px-16 gap-8 justify-center">
                {articles.map((article, index) => (
                    <VerticalArticle article={article} key={index} />
                ))}
            </div>
            <FeaturedArticlesCarousel />
        </section>
    );
}
