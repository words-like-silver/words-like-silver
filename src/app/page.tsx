import BookCarousel from "./components/book-carousel";
import BookWidget from "./components/book-widget";
import CategoryArticleList from "./components/category-article-list";
import FeatureArticle from "./components/feature-article";
import FeaturedArticlesBlock from "./components/featured-articles-block";
import Footer from "./components/footer";
import HorizontalArticleBlocks from "./components/horizontal-article-blocks";
import MobileNavbar from "./components/mobile-navbar/mobile-navbar";
import MoreArticles from "./components/more-articles";
import Navbar from "./components/navbar/navbar";
import NewArticleList from "./components/new-articles-list";
import Sidebar from "./components/sidebar";
import {
    getArticlesByCategory,
    getFeaturedArticle,
    getFeaturedArticleSecondary,
    getNavigationItems,
} from "./lib/cms/queries";

export default async function Home() {
    const featuredArticle = await getFeaturedArticle();
    const featuredArticleSecondary = await getFeaturedArticleSecondary();
    const books = await getArticlesByCategory("BOOKS", undefined, 11);
    const navigationItems = await getNavigationItems();

    return (
        <>
            <main className="">
                <div className="mt-16 hidden lg:block">
                    <HorizontalArticleBlocks />
                </div>
                <Navbar />
                <div className="fixed left-4 top-4 z-30">
                    <MobileNavbar navigationItems={navigationItems} />
                </div>
                <Sidebar />
                <div className="lg:ml-72">
                    <section className="mb-16 mt-4 flex flex-col items-center gap-4 px-8 lg:grid xl:grid-cols-[1fr,1.75fr,1fr]">
                        <div className="hidden xl:block">
                            <NewArticleList />
                        </div>
                        <FeatureArticle article={featuredArticle} />
                        <div className="mt-12 hidden lg:mt-0 xl:block">
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
