"use client";

import ArticlePagination from "@/app/components/article-pagination";
import BackgroundArticles from "@/app/components/background-articles";
import { Article } from "@/app/lib/cms/types";

export default function CategoryArticles({
    allArticles,
    tags,
}: {
    allArticles: Article[] | null;
    tags?: (string | undefined)[] | null;
}) {
    return (
        <div className="relative mb-16">
            <ArticlePagination
                limit={6}
                allArticles={allArticles || []}
                tags={tags}
                ArticleRenderer={BackgroundArticles}
                colour="white"
            />
            <div className="absolute left-0 top-0 -z-10 mt-40 h-[calc(100%-10rem)] w-full bg-dark-green lg:mt-32 lg:h-[calc(100%-6rem)]"></div>
        </div>
    );
}
