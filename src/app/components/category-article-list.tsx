import { Article } from "../lib/cms/types";
import ArticleList from "./article-list";

export default async function CategoryArticleList({
    articles,
    category,
}: {
    articles: Article[];
    category: string;
}) {
    return (
        <div>
            <h2 className="mb-8 text-center text-4xl">{category}</h2>
            <ArticleList articles={articles} />
        </div>
    );
}
