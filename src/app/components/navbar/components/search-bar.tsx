"use client";

import { Article } from "@/app/lib/cms/types";
import { processSanityBlock } from "@/app/lib/text/process-sanity-block";
import { FuseResult } from "fuse.js";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import MagnifyingGlass from "../../svg/magnifying-glass";
import Throbber from "../../svg/throbber";
import XIcon from "../../svg/x-icon";
import { searchArticles } from "../actions";

export default function SearchBar() {
    const [pending, startTransition] = useTransition();
    const [articles, setArticles] = useState<FuseResult<Article>[]>([]);
    const [showSearchResults, setShowSearchResults] = useState(false);

    return (
        <form
            action={async (formData: FormData) =>
                startTransition(async () => {
                    const query = formData.get("query") as string;
                    if (query === "") return;
                    const articles = await searchArticles(query);
                    setArticles(articles.articles);
                    setShowSearchResults(true);
                })
            }
            className="z-[99] hidden w-72 flex-col items-center justify-center px-8 font-frys-baskerville lg:flex"
        >
            <div className="relative">
                <input
                    name="query"
                    type="text"
                    className="h-8 w-56 rounded-xl border-2 border-black bg-beige px-2 pr-8"
                    onBlur={() => setShowSearchResults(false)}
                    onFocus={() => {
                        if (articles.length > 0) {
                            setShowSearchResults(true);
                        }
                    }}
                    onChange={(e) => {
                        if (e.target.value === "") {
                            setArticles([]);
                            setShowSearchResults(false);
                        }
                    }}
                />
                <button className="absolute right-3 top-0 flex h-full items-center justify-center">
                    {pending ? (
                        <Throbber className="h-4 w-4 animate-spin" />
                    ) : (
                        <MagnifyingGlass className="h-4 w-4" />
                    )}
                </button>
                {showSearchResults && (
                    <div className="absolute bottom-0 top-10 h-fit w-80 border border-black bg-beige">
                        <div className="flex items-center justify-between border-b border-black px-4 py-1 font-sailing-club text-xl">
                            <div>Search Results ({articles.length})</div>
                            <button
                                aria-label="close search results"
                                onClick={() => setShowSearchResults(false)}
                            >
                                <XIcon className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="max-h-[500px] divide-y divide-black overflow-auto">
                            {articles.length === 0 && (
                                <div className="px-4 py-6">
                                    No results found
                                </div>
                            )}
                            {articles.map((article) => (
                                <Link
                                    key={"search-result" + article.item.slug}
                                    className="grid grid-cols-[1fr,2fr] gap-4 py-6 pl-4 pr-8"
                                    href={`/articles/${article.item.slug.current}`}
                                >
                                    <Image
                                        src={article.item.mainImage.asset.url}
                                        alt={""}
                                        height={64}
                                        width={64}
                                        className="h-full w-full object-cover object-left"
                                    />
                                    <div>
                                        {processSanityBlock(
                                            article.item.title[0]
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </form>
    );
}
