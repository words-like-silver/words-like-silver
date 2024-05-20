import Link from "next/link";
import { getFeaturedCategory } from "../lib/cms/queries";
import ArticleList from "./article-list";

export default async function CategoryArticleList() {
    const featuredCategory = await getFeaturedCategory(4);
    return (
        <div>
            <h2 className="mb-8 text-center text-4xl">
                {featuredCategory?.title}
            </h2>
            <ArticleList articles={featuredCategory?.articles || []} />
            <Link
                href={`/${featuredCategory?.slug.current}`}
                className="block text-center font-sailing-club text-3xl italic underline"
            >
                more {featuredCategory?.title.toLocaleLowerCase()}
            </Link>
        </div>
    );
}
