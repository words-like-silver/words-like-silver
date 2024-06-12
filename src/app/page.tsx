import BookCarousel from "./components/book-carousel";
import BookWidget from "./components/book-widget";
import CategoryArticleList from "./components/category-article-list";
import FeatureArticle from "./components/feature-article";
import FeaturedArticlesBlock from "./components/featured-articles-block";
import Footer from "./components/footer";
import HorizontalArticleBlocks from "./components/horizontal-article-blocks";
import MoreArticles from "./components/more-articles";
import Navbar from "./components/navbar/navbar";
import NewArticleList from "./components/new-articles-list";
import Sidebar from "./components/sidebar";
import {
    getArticlesByCategory,
    getFeaturedArticle,
    getFeaturedArticleSecondary,
} from "./lib/cms/queries";

export default async function Home() {
    const featuredArticle = await getFeaturedArticle();
    const featuredArticleSecondary = await getFeaturedArticleSecondary();
    const books = await getArticlesByCategory("BOOKS", undefined, 11);

    return (
        <>
            <main className="">
                <div className="mt-16 hidden lg:block">
                    <HorizontalArticleBlocks />
                </div>
                <Navbar />
                <Sidebar />
                <div className="lg:ml-72">
                    <section className="mb-16 mt-4 flex flex-col items-center gap-4 px-8 lg:grid xl:grid-cols-[1fr,1.75fr,1fr]">
                        <div className="order-3 hidden lg:order-1 xl:block">
                            <NewArticleList />
                        </div>
                        <div className="order-1 lg:order-2">
                            <FeatureArticle article={featuredArticle} />
                        </div>
                        <div className="order-2 mt-12 hidden lg:order-3 lg:mt-0 xl:block">
                            <BookWidget />
                        </div>
                    </section>
                    <FeaturedArticlesBlock />
                    <BookCarousel books={books} />
                    <section className="mx-auto mt-32 max-w-7xl gap-16 px-4 lg:flex">
                        <FeatureArticle
                            background
                            article={featuredArticleSecondary}
                        />
                        <div className="mt-16 lg:hidden"></div>
                        <CategoryArticleList />
                    </section>
                </div>
                <MoreArticles />
            </main>
            <Footer />
        </>
    );
}
