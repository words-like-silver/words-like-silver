import Link from "next/link";
import { getNewArticles } from "../lib/cms/queries";
import ArticleList from "./article-list";

export default async function NewArticleList() {
    const newArticles = await getNewArticles(5);
    return (
        <div className="">
            <h2 className="text-center font-sailing-club text-3xl italic">
                new
            </h2>
            <ArticleList articles={newArticles} />
            <Link
                href="/articles"
                className="block text-center font-sailing-club text-3xl italic"
            >
                all posts
            </Link>
        </div>
    );
}
