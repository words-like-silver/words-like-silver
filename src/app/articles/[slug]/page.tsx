import { getAllArticleSlugs, getArticleBySlug } from "@/app/lib/cms/queries";

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
        title: article.title,
        description: article.subhead,
        robots: "max-image-preview:large",
        openGraph: {
            title: article.title,
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
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.subhead}</p>
            <p>{JSON.stringify(article.body)}</p>
        </div>
    );
}
