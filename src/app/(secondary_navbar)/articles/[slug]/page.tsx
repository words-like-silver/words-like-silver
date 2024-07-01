import MoreArticles from "@/app/components/more-articles";
import SocialsBar from "@/app/components/socials-bar";
import { getAllArticleSlugs, getArticleBySlug } from "@/app/lib/cms/queries";
import { getTextFromBlock } from "@/app/lib/text/process-sanity-block";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import ArticleBody from "./components/article-body";
import ArticleHeader from "./components/article-header";
import ArticleSidebar from "./components/article-sidebar";

export async function generateStaticParams() {
    const articleSlugs = await getAllArticleSlugs();

    if (!articleSlugs?.length) return [];

    return articleSlugs.map((slug) => {
        if (slug) {
            return {
                slug,
            };
        }
    });
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const article = await getArticleBySlug(params.slug);

    if (!article || !article.slug?.current) {
        return {};
    }

    return {
        title: getTextFromBlock(article.title[0]),
        description: article.subhead,
        robots: "max-image-preview:large",
        openGraph: {
            title: getTextFromBlock(article.title[0]),
            description: article.subhead,
            siteName: "Words Like Silver",
            images: [
                {
                    url: article.mainImage.asset.url,
                    alt: article.mainImage.alt,
                },
            ],
            type: "article",
            url: `https://www.wordslikesilver.com/articles/${article.slug.current}`,
            locale: "en-US",
            authors: "Grace Smith",
        },
    };
}

export default async function Article({
    params,
}: {
    params: { slug: string };
}) {
    const article = await getArticleBySlug(params.slug);
    if (!article) return redirect("/");
    if (!article.slug?.current) return notFound();

    return (
        <main>
            <article className="">
                <div>
                    <ArticleHeader article={article} />
                    <div className="flex flex-col items-center gap-x-8 gap-y-8 px-6 xl:flex-row xl:items-start xl:justify-center">
                        <ArticleSidebar article={article} />
                        <ArticleBody article={article} />
                        <div className="w-44 pr-8"></div>
                    </div>
                </div>
            </article>
            {!!article.relatedArticles &&
                article.relatedArticles.length > 0 && (
                    <div>
                        <div className="relative h-12 w-full">
                            <Image
                                src="/images/underline_long_1.png"
                                fill
                                alt=""
                            />
                        </div>
                        <MoreArticles
                            articles={article.relatedArticles}
                            title="MORE LIKE THIS"
                            includeCategory={false}
                            noGap
                        />
                        <div className="relative h-12 w-full">
                            <Image
                                src="/images/underline_long_2.png"
                                fill
                                alt=""
                            />
                        </div>
                    </div>
                )}
            <div className="mb-44 flex flex-col items-center">
                <h2 className="mb-8 mt-16 text-center text-3xl underline lg:text-4xl">
                    Share this article
                </h2>
                <SocialsBar />
            </div>
        </main>
    );
}
