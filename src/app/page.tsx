import BookCarousel from "./components/book-carousel";
import BookWidget from "./components/book-widget";
import CategoryArticleList from "./components/category-article-list";
import FeatureArticle from "./components/feature-article";
import FeaturedArticlesBlock from "./components/featured-articles-block";
import Footer from "./components/footer";
import HorizontalArticleBlocks from "./components/horizontal-article-blocks";
import MoreArticles from "./components/more-articles";
import Navbar from "./components/navbar";
import NewArticleList from "./components/new-articles-list";
import Sidebar from "./components/sidebar";
import {
    getFeaturedArticle,
    getFeaturedArticleSecondary,
} from "./lib/cms/queries";

export default async function Home() {
    const featuredArticle = await getFeaturedArticle();
    const featuredArticleSecondary = await getFeaturedArticleSecondary();
    return (
        <>
            <main className="">
                <div className="mt-16 hidden lg:block">
                    <HorizontalArticleBlocks />
                </div>
                <Navbar />
                <Sidebar />
                <div className="lg:ml-72">
                    <section className="mb-16 mt-4 flex grid-cols-[1fr,1.75fr,1fr] flex-col gap-8 px-8 lg:grid">
                        <div className="order-3 lg:order-1">
                            <NewArticleList />
                        </div>
                        <div className="order-1 lg:order-2">
                            <FeatureArticle article={featuredArticle} />
                        </div>
                        <div className="order-2 mt-12 lg:order-3 lg:mt-0 ">
                            <BookWidget />
                        </div>
                    </section>
                    <FeaturedArticlesBlock />
                    <BookCarousel />
                    <section className="mx-auto mt-16 max-w-7xl grid-cols-[2fr,1.25fr] gap-16 px-4 lg:grid">
                        <FeatureArticle
                            background
                            article={featuredArticleSecondary}
                        />
                        <div className="mt-16 lg:mt-0">
                            <CategoryArticleList />
                        </div>
                    </section>
                </div>
                <MoreArticles />
            </main>
            <Footer />
        </>
    );
}
