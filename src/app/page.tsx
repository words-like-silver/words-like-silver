import ArticleBlocks from "./components/article-blocks";
import BookWidget from "./components/book-widget";
import CategoryArticleList from "./components/category-article-list";
import FeatureArticle from "./components/feature-article";
import FeaturedArticlesBlock from "./components/featured-articles-block";
import MoreArticles from "./components/more-articles";
import Navbar from "./components/navbar";
import NewArticleList from "./components/new-articles-list";
import Sidebar from "./components/sidebar";
import { getArticleBySlug } from "./lib/cms/queries";

export default async function Home() {
    const exampleAPI = (
        <>
            <div>
                {`https://vrjpqtdp.api.sanity.io/v2022-03-07/data/query/production?query=*[_type
                == "article"]`}
            </div>
            <pre>
                {JSON.stringify(
                    {
                        query: '*[_type == "article"]\n\n',
                        result: [
                            {
                                title: "Test 2",
                                _updatedAt: "2024-02-03T03:45:58Z",
                                _createdAt: "2024-02-03T03:45:58Z",
                                _rev: "8mGThtWzkZE49nEaO4U59w",
                                _type: "article",
                                _id: "1f2fa315-f37b-4dc0-882b-fb62a4332f90",
                            },
                            {
                                slug: {
                                    current: "test-article",
                                    _type: "slug",
                                },
                                _createdAt: "2024-02-03T02:57:14Z",
                                _rev: "MkmgsAGxwT6Nx7jjOeWYUZ",
                                _type: "article",
                                _id: "59f0cee0-157a-456d-a838-c9d1507e8c68",
                                body: [
                                    {
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "lajsdlfjl;asjdfl;kjf",
                                                _key: "0ee5279232ae",
                                            },
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "0ed1f180a75c",
                                        markDefs: [],
                                    },
                                    {
                                        _type: "block",
                                        style: "normal",
                                        _key: "149edecfcd9f",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "",
                                                _key: "45da5b999c15",
                                            },
                                        ],
                                    },
                                    {
                                        _type: "image",
                                        _key: "e79afa9a90a2",
                                        asset: {
                                            _ref: "image-92682811953395af7c3745da67b21f45694fc703-462x540-png",
                                            _type: "reference",
                                        },
                                    },
                                    {
                                        style: "normal",
                                        _key: "207f45e64067",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "lajsdf;lkjasdkf",
                                                _key: "f59e1238872e",
                                            },
                                        ],
                                        _type: "block",
                                    },
                                    {
                                        _type: "block",
                                        style: "normal",
                                        _key: "3cddd095d95d",
                                        markDefs: [],
                                        children: [
                                            {
                                                _key: "532e08446f07",
                                                _type: "span",
                                                marks: [],
                                                text: "alsjdfljdsa;kf",
                                            },
                                        ],
                                    },
                                    {
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "alksdjfljkasdf",
                                                _key: "31396d967d53",
                                            },
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "4408b8f7af15",
                                        markDefs: [],
                                    },
                                    {
                                        _type: "image",
                                        _key: "91aaca6bc7bd",
                                    },
                                    {
                                        _type: "block",
                                        style: "normal",
                                        _key: "ab8ab8181671",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "jasdl;kjf",
                                                _key: "72e6d79589b0",
                                            },
                                        ],
                                    },
                                    {
                                        markDefs: [],
                                        children: [
                                            {
                                                text: "",
                                                _key: "35f7ab214a7a",
                                                _type: "span",
                                                marks: [],
                                            },
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "e672e1a2c739",
                                    },
                                    {
                                        _key: "1c8a1bc41aa2",
                                        markDefs: [],
                                        children: [
                                            {
                                                marks: [],
                                                text: "asdfj;sjadf",
                                                _key: "27e82266aa52",
                                                _type: "span",
                                            },
                                        ],
                                        _type: "block",
                                        style: "normal",
                                    },
                                    {
                                        _type: "image",
                                        _key: "723eb334b1c3",
                                    },
                                    {
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: ";alskdjflksjadf",
                                                _key: "f3e75b5e43b6",
                                            },
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "6048bc9730af",
                                    },
                                    {
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "",
                                                _key: "d36028768328",
                                            },
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "5035904d4edc",
                                        markDefs: [],
                                    },
                                    {
                                        _key: "1e41ea3a6e58",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "",
                                                _key: "5a0f45c951ce",
                                            },
                                        ],
                                        _type: "block",
                                        style: "normal",
                                    },
                                ],
                                title: "Test Article",
                                _updatedAt: "2024-02-03T03:36:12Z",
                            },
                        ],
                        ms: 4,
                    },
                    undefined,
                    2
                )}
            </pre>
        </>
    );
    return (
        <main className="">
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <section className="mb-4 mt-16 hidden lg:block">
                        <ArticleBlocks />
                    </section>
                    <Navbar />
                    <section className="mb-16 mt-4 flex grid-cols-[1fr,1.75fr,1fr] flex-col gap-8 px-8 lg:grid">
                        <div className="order-3 lg:order-1">
                            <NewArticleList />
                        </div>
                        <div className="order-1 lg:order-2">
                            <FeatureArticle />
                        </div>
                        <div className="order-2 mt-12 lg:order-3 lg:mt-0 ">
                            <BookWidget />
                        </div>
                    </section>
                    <FeaturedArticlesBlock />
                    {/* <BookCarousel /> */}
                    <section className="mx-auto mt-16 max-w-7xl grid-cols-[2fr,1.25fr] gap-16 px-4 lg:grid">
                        <FeatureArticle background />
                        <div className="mt-16 lg:mt-0">
                            <CategoryArticleList />
                        </div>
                    </section>
                </div>
            </div>
            <MoreArticles />
        </main>
    );
}
