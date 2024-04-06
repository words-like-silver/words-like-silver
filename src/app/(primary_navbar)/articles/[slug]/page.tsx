import { getAllArticleSlugs, getArticleBySlug } from "@/app/lib/cms/queries";
import { getTextFromBlock } from "@/app/lib/text/process-sanity-block";
import { redirect } from "next/navigation";
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

    if (!article) {
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

    return (
        <main>
            <article className="">
                <div>
                    <ArticleHeader article={article} />
                    <div className="flex flex-wrap justify-center gap-x-32 gap-y-12">
                        <ArticleSidebar article={article} />
                        <ArticleBody article={article} />
                    </div>
                </div>
            </article>
        </main>
    );
}