import { getNewArticles } from "../lib/cms/queries";
import VerticalArticle from "./vertical-article";

export default async function MoreArticles() {
    const latestArticles = await getNewArticles(20);

    const filteredArticles = latestArticles.filter(
        (article) =>
            !article.categories
                .map((category) => category.title)
                .includes("BOOKS")
    );

    const extraArticles = filteredArticles.length % 4;

    return (
        <section className="my-16">
            <h2 className="mb-12 mt-24 text-center text-4xl">FURTHER READING</h2>
            <div className="mx-auto grid max-w-10xl justify-center gap-x-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredArticles
                    .slice(0, filteredArticles.length - extraArticles)
                    .map((article) => (
                        <VerticalArticle
                            includeReadMore
                            includeDescription
                            includeCategory
                            article={article}
                            key={"more-articles" + article._id}
                        />
                    ))}
            </div>
            {/* <MobileArticlesCarousel */}
            {/*     articles={filteredArticles.slice( */}
            {/*         0, */}
            {/*         filteredArticles.length - extraArticles */}
            {/*     )} */}
            {/* /> */}
        </section>
    );
}
