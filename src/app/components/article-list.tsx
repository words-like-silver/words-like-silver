import Link from "next/link";
import { Article } from "../lib/cms/types";

export default function ArticleList({ articles }: { articles: Article[] }) {
    return (
        <ul>
            {articles.map((article) => (
                <li
                    className="my-4 border-b border-black px-4 pb-4 text-center text-2xl"
                    key={article.slug.current}
                >
                    <Link
                        href={`/articles/${article.slug.current}`}
                        className="block h-full w-full"
                    >
                        {article.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
