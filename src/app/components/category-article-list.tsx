import { getArticlesByCategory } from "../lib/cms/queries";
import ArticleList from "./article-list";

export default async function CategoryArticleList({
    category,
}: {
    category: string;
}) {
    const categoryArticles = await getArticlesByCategory(category, 5);
    return (
        <div>
            <h2 className="mb-8 text-center text-4xl">{category}</h2>
            <ArticleList articles={categoryArticles} />
        </div>
    );
}
