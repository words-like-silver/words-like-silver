import { getAllArticleSlugs, getArticleBySlug } from "@/app/lib/cms/queries";
import { articleBodyMap } from "@/app/lib/constants";
import Image from "next/image";
import Link from "next/link";

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
        <main>
            <section className="mx-auto my-16 max-w-6xl">
                <div className="flex flex-wrap items-center justify-center gap-4 font-sailing-club">
                    {article.categories.map((category) => (
                        <Link
                            href={`/categories/${category.slug.current}`}
                            className="text-4xl underline"
                            key={category.slug.current}
                        >
                            {category.title}
                        </Link>
                    ))}
                </div>
                <h1 className="my-8 text-balance px-8 text-center font-sailing-club text-6xl">
                    {article.title}
                </h1>
                <p className="text-balance text-center text-2xl">
                    {article.subhead}
                </p>
                <p className="mt-4 text-center font-sailing-club text-2xl italic">
                    By Grace Smith
                </p>
                <p className="text-center font-sailing-club text-2xl italic">
                    Published{" "}
                    {new Date(article._createdAt).toLocaleDateString(
                        "default",
                        { month: "long", day: "numeric", year: "numeric" }
                    )}
                </p>
                <div className="mt-4 flex items-center justify-center gap-4">
                    <div>email</div>
                    <div>insta</div>
                    <div>twitter</div>
                </div>
            </section>
            <section className="relative mx-auto my-16 aspect-video w-full max-w-6xl">
                <Image
                    src={article.mainImage.asset.url}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute -z-10 aspect-square h-full translate-x-1/2 scale-110">
                    <Image src="/images/paper_background.png" alt="" fill />
                </div>
            </section>
            <section className="mx-auto mb-44 mt-24 max-w-3xl">
                {article.body?.map((block) =>
                    (
                        articleBodyMap[block._type || "block"] ||
                        articleBodyMap["block"]
                    )(block)
                )}
            </section>
        </main>
    );
}
