import { Article } from "../lib/cms/types";
import VerticalArticle from "./vertical-article";

export default async function MoreArticles({
    articles,
    title,
}: {
    articles: Article[];
    title: string;
}) {
    return (
        <section>
            <h2 className="mb-12 mt-24 text-center text-3xl lg:text-4xl">
                {title}
            </h2>
            <div className="mx-auto grid max-w-10xl justify-center gap-x-8 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8 xl:grid-cols-4">
                {articles.map((article) => (
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
