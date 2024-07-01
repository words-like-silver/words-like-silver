import Image from "next/image";
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
    getNewArticles,
} from "./lib/cms/queries";

export default async function Home() {
    const featuredArticle = await getFeaturedArticle();
    const featuredArticleSecondary = await getFeaturedArticleSecondary();
    const books = await getArticlesByCategory("BOOKS", undefined, 11);
    const latestArticles = await getNewArticles(20);

    // filter out book category and trim overflow articles
    let filteredMoreArticles = latestArticles.filter(
        (article) =>
            !article.categories
                ?.map((category) => category.title)
                .includes("BOOKS")
    );
    const extraArticles = filteredMoreArticles.length % 4;
    filteredMoreArticles.slice(0, filteredMoreArticles.length - extraArticles);

    if (books.length % 2 === 0) {
        books.pop();
    }

    return (
        <>
            <main className="">
                <div className="mt-16 hidden lg:block">
                    <HorizontalArticleBlocks />
                </div>
                <Navbar />
                <div className="lg:grid lg:grid-cols-[18rem,1fr]">
                    <Sidebar />
                    <section className="mx-auto mt-4 flex flex-col items-center gap-x-4 gap-y-10 px-4 lg:grid lg:max-w-4xl lg:grid-cols-[1.5fr,1fr] lg:grid-rows-2 lg:px-8 xl:items-start 2xl:mb-16 2xl:mt-16 2xl:max-w-none 2xl:grid-cols-[1fr,1.75fr,1fr] 2xl:grid-rows-none">
                        <div className="w-full lg:col-span-3 lg:px-8 2xl:order-2 2xl:col-auto 2xl:px-0">
                            <FeatureArticle article={featuredArticle} />
                        </div>
                        <div className="mt-20 lg:mt-0 2xl:order-1">
                            <NewArticleList />
                        </div>
                        <div className="mt-12 lg:mt-0 2xl:order-3">
                            <BookWidget />
                        </div>
                    </section>
                </div>
                <div className="mt-16">
                    <FeaturedArticlesBlock />
                </div>
                <BookCarousel books={books} />
                <section className="mx-auto mt-36 max-w-7xl gap-4 pr-4 lg:flex">
                    <FeatureArticle
                        background
                        article={featuredArticleSecondary}
                    />
                    <div className="mt-16 lg:hidden"></div>
                    <CategoryArticleList />
                </section>
                <div className="mt-24 lg:mt-44">
                    <MoreArticles
                        articles={filteredMoreArticles}
                        title="FURTHER READING"
                    />
                </div>
                <div className="mx-auto my-12 h-24 w-24">
                    <Image
                        src="/images/arrow_left.png"
                        alt=""
                        height={30}
                        width={160}
                        className="-rotate-90 object-fill"
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
