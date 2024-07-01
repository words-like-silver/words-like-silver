import clsx from "clsx";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Article } from "../lib/cms/types";

export default function ArticlePagination({
    limit,
    allArticles,
    ArticleRenderer,
    articleRendererProps,
    tags,
    colour = "white",
}: {
    limit: number;
    allArticles: Article[];
    ArticleRenderer: (props: any) => ReactNode;
    articleRendererProps?: Record<string, any>;
    tags?: (string | undefined)[] | null;
    colour?: "white" | "black";
}) {
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState(allArticles);
    const [activeTag, setActiveTag] = useState("");
    const start = (page - 1) * limit;
    const end = start + limit;
    const categoryArticleContainerRef = useRef<HTMLDivElement>(null);
    const hasSetPage = useRef(false);

    const scrollToTop = () => {
        if (categoryArticleContainerRef.current) {
            categoryArticleContainerRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        if (hasSetPage.current === true) {
            scrollToTop();
        }
    }, [page]);

    if (!articles) return null;

    const filterArticles = (tag: string) => {
        if (tag == "") {
            setArticles(allArticles);
            return;
        }
        const filteredArticles =
            allArticles?.filter((article) => {
                const tagNames = article.tags?.map((tag) => tag.name);
                return tagNames?.includes(tag);
            }) || [];
        setArticles(filteredArticles);
    };

    const visibleArticles = articles.slice(start, end);

    return (
        <div
            ref={categoryArticleContainerRef}
            className={clsx(
                "scroll-m-44",
                colour === "white" ? "text-white" : "text-black"
            )}
        >
            <section className="mx-auto mb-16 max-w-7xl px-4">
                <div className="flex flex-wrap items-center justify-center font-sailing-club text-xl text-black lg:text-3xl">
                    {!!tags && tags?.length > 0 && (
                        <button
                            className={clsx(
                                "relative mx-4 text-center hover:underline hover:[text-decoration-color:grey]"
                            )}
                            key={"tag all"}
                            onClick={() => {
                                setActiveTag("");
                                filterArticles("");
                            }}
                        >
                            ALL
                            {activeTag === "" && (
                                <div className="animate-underline-appear absolute bottom-0.5 left-0 h-[3px] w-full origin-left bg-black"></div>
                            )}
                        </button>
                    )}
                    {tags?.map((tag) => {
                        return (
                            tag && (
                                <button
                                    className={clsx(
                                        "relative mx-4 text-center hover:underline hover:[text-decoration-color:grey]"
                                    )}
                                    key={"tag" + tag}
                                    onClick={() => {
                                        setActiveTag(tag);
                                        filterArticles(tag);
                                    }}
                                >
                                    {tag.toUpperCase()}
                                    {activeTag === tag && (
                                        <div className="animate-underline-appear absolute bottom-0.5 left-0 h-[3px] w-full origin-left bg-black"></div>
                                    )}
                                </button>
                            )
                        );
                    })}
                </div>
            </section>
            {
                <ArticleRenderer
                    articles={visibleArticles}
                    tags={tags}
                    {...articleRendererProps}
                />
            }
            {articles.length > limit && (
                <div className="mt-8 flex justify-center gap-4 text-3xl">
                    <button
                        className={clsx(
                            "font-sailing-club italic",
                            page === 1 && "invisible"
                        )}
                        disabled={page === 1}
                        onClick={() => {
                            setPage(1);
                            hasSetPage.current = true;
                        }}
                    >
                        first
                    </button>
                    <button
                        onClick={() => {
                            setPage(page - 1);
                            hasSetPage.current = true;
                        }}
                        className={clsx(page === 1 && "invisible")}
                    >
                        <Image
                            src="/images/arrow_left.png"
                            width={100}
                            height={25}
                            alt=""
                            className={clsx(colour === "white" && "invert")}
                        />
                    </button>
                    <div>{page}</div>
                    <button
                        onClick={() => {
                            setPage(page + 1);
                            hasSetPage.current = true;
                        }}
                        className={clsx(
                            page >= Math.ceil(articles.length / limit) &&
                                "invisible"
                        )}
                        disabled={page >= Math.ceil(articles.length / limit)}
                    >
                        <Image
                            src="/images/arrow_right.png"
                            width={100}
                            height={25}
                            alt=""
                            className={clsx(colour === "white" && "invert")}
                        />
                    </button>
                    <button
                        onClick={() => {
                            setPage(Math.ceil(articles.length / limit));
                            hasSetPage.current = true;
                        }}
                        className={clsx(
                            "font-sailing-club italic",
                            page >= Math.ceil(articles.length / limit) &&
                                "invisible"
                        )}
                        disabled={page >= Math.ceil(articles.length / limit)}
                    >
                        last
                    </button>
                </div>
            )}
        </div>
    );
}
