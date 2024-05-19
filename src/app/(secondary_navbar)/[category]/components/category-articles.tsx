"use client";

import VerticalArticle from "@/app/components/vertical-article";
import { Article } from "@/app/lib/cms/types";
import clsx from "clsx";
import { useState } from "react";

export default function CategoryArticles({
    allArticles,
    tags,
}: {
    allArticles: Article[] | null;
    tags?: (string | undefined)[] | null;
}) {
    const LIMIT = 9;
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState(allArticles);
    const start = (page - 1) * LIMIT;
    const end = start + LIMIT;

    if (!articles) return null;

    const filterArticles = (tag: string) => {
        if (tag == "") {
            setArticles(allArticles);
            return;
        }
        const filteredArticles = articles.filter((article) => {
            const tagNames = article.tags?.map((tag) => tag.name);
            return tagNames?.includes(tag);
        });
        setArticles(filteredArticles);
    };
    return (
        <section className="relative mb-16 pb-16 text-white">
            <section className="mx-auto mb-16 max-w-7xl px-16 underline">
                <div className="flex items-center justify-center font-sailing-club text-black underline lg:text-3xl">
                    {tags?.length && (
                        <button
                            className="px-4 text-center"
                            key={"tag all"}
                            onClick={() => filterArticles("")}
                        >
                            ALL
                        </button>
                    )}
                    {tags?.map((tag) => {
                        return (
                            tag && (
                                <button
                                    className="px-4 text-center"
                                    key={"tag" + tag}
                                    onClick={() => filterArticles(tag)}
                                >
                                    {tag.toUpperCase()}
                                </button>
                            )
                        );
                    })}
                </div>
            </section>
            <div className="mx-auto max-w-10xl px-28">
                <div className="grid grid-cols-3 gap-16">
                    {articles?.slice(start, end).map((article, index) => (
                        <div
                            className="animate-fade-in-up"
                            key={
                                "category-article-" +
                                article.slug.current +
                                index
                            }
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <VerticalArticle
                                article={article}
                                includeDescription
                                includeReadMore
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-32 flex justify-center gap-4 text-3xl">
                    <button
                        className={clsx(
                            "font-sailing-club italic",
                            page === 1 && "invisible"
                        )}
                        disabled={page === 1}
                        onClick={() => {
                            setPage(1);
                        }}
                    >
                        first
                    </button>
                    <button
                        onClick={() => {
                            setPage(page - 1);
                        }}
                        className={clsx(page === 1 && "invisible")}
                    >
                        {"<-----"}
                    </button>
                    <div className="underline">{page}</div>
                    <button
                        onClick={() => {
                            setPage(page + 1);
                        }}
                        className={clsx(
                            page >= Math.ceil(articles.length / LIMIT) &&
                                "invisible"
                        )}
                        disabled={page >= Math.ceil(articles.length / LIMIT)}
                    >
                        {"----->"}
                    </button>
                    <button
                        onClick={() => {
                            setPage(Math.ceil(articles.length / LIMIT));
                        }}
                        className={clsx(
                            "font-sailing-club italic",
                            page >= Math.ceil(articles.length / LIMIT) &&
                                "invisible"
                        )}
                        disabled={page >= Math.ceil(articles.length / LIMIT)}
                    >
                        last
                    </button>
                </div>
            </div>
            <div className="absolute left-0 top-0 -z-10 mt-32 h-[calc(100%-8rem)] w-full bg-dark-green"></div>
        </section>
    );
}
