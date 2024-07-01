import { Article } from "../lib/cms/types";
import VerticalArticle from "./vertical-article";

export default function BackgroundArticles({
    articles,
}: {
    articles: Article[];
}) {
    return (
        <div className="mx-auto grid max-w-9xl justify-center gap-x-8 px-4 text-white sm:grid-cols-2 lg:grid-cols-3 lg:px-8 2xl:grid-cols-3">
            {articles.map((article, index) => (
                <VerticalArticle
                    article={article}
                    includeReadMore
                    includeDescription
                    key={"category-article-" + article.slug?.current + index}
                    additionalClassName="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                />
            ))}
        </div>
    );
}
