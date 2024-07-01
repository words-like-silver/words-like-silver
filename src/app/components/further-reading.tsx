"use client";
import { Article } from "../lib/cms/types";
import ArticlePagination from "./article-pagination";
import MoreArticles from "./more-articles";

export default function FurtherReading({ articles }: { articles: Article[] }) {
    return (
        <div className="relative mb-16">
            <ArticlePagination
                limit={6}
                allArticles={articles || []}
                ArticleRenderer={MoreArticles}
                articleRendererProps={{ title: "FURTHER READING" }}
                colour="black"
            />
        </div>
    );
}
