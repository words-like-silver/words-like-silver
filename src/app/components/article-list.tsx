import Link from "next/link";
import { Article } from "../lib/cms/types";
import { processSanityBlock } from "../lib/text/process-sanity-block";
import Underline from "./svg/underline";

export default function ArticleList({ articles }: { articles: Article[] }) {
    return (
        <ul>
            {articles.map((article, index) => (
                <li
                    className="relative my-4 px-4 pb-4 text-center text-2xl"
                    key={"article-list-" + article.slug.current + index}
                >
                    <Link
                        href={`/articles/${article.slug.current}`}
                        className="block h-full w-full"
                    >
                        {processSanityBlock(article.title[0])}
                    </Link>
                    <div className="relative pt-4">
                        <Underline className="w-full" />
                    </div>
                </li>
            ))}
        </ul>
    );
}
