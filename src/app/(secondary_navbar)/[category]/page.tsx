import VerticalArticle from "@/app/components/vertical-article";
import {
    getAllCategorySlugs,
    getCategoryBySlug,
    getNavigationItems,
} from "@/app/lib/cms/queries";
import { Category as CategoryType } from "@/app/lib/cms/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import CategoryArticles from "./components/category-articles";

export async function generateStaticParams() {
    const categorySlugs = await getAllCategorySlugs();
    categorySlugs.push("all");

    if (!categorySlugs?.length) return [];

    return categorySlugs.map((slug) => {
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
    params: { category: string };
}) {
    const category = await getCategoryBySlug(params.category);

    if (!category) {
        return {};
    }

    return {
        title: category.title,
        description: category.description,
        robots: "max-image-preview:large",
        openGraph: {
            title: category.title,
            description: category.description || "",
            siteName: "Words Like Silver",
            type: "website",
            url: `https://www.wordslikesilver.com/${params.category}`,
            locale: "en-US",
        },
    };
}

export default async function Category({
    params,
}: {
    params: { category: string };
}) {
    let category: CategoryType | undefined = undefined;
    category = await getCategoryBySlug(params.category);
    const navigationItems = await getNavigationItems();
    const tags: string[] = [];

    category?.articles.forEach((article) => {
        const articleTags = article.tags?.map((tag) => tag.name);
        articleTags?.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
    });

    if (!category) return redirect("/");
    return (
        <main>
            <section className="mx-auto my-16 max-w-3xl">
                <h1 className="mx-auto my-8 text-balance px-24 text-center font-sailing-club text-6xl">
                    {category.title}
                </h1>
                {!!category.description && (
                    <p className="mx-auto px-24 pb-2 text-center text-2xl">
                        {category.description}
                    </p>
                )}
                <div className="mt-4 flex items-center justify-center gap-4">
                    <div>email</div>
                    <div>insta</div>
                    <div>twitter</div>
                </div>
                <div className="flex flex-col items-center text-2xl">
                    <div className="mt-6 font-sailing-club italic underline">
                        newsletters
                    </div>
                    <div className="font-sailing-club italic underline">
                        support
                    </div>
                    <div className="font-sailing-club italic underline">
                        {category.title === "BOOKS"
                            ? "join the book club"
                            : "follow on socials"}
                    </div>
                </div>
            </section>
            <section
                className={clsx(
                    "mx-auto mb-32 max-w-10xl grid-cols-[1fr,1.5fr,1fr] justify-center px-4 lg:grid lg:px-8",
                    category.featuredArticles?.length === 1 ? "" : "gap-x-16"
                )}
            >
                {category.featuredArticles?.length === 1 && <div></div>}
                {category.featuredArticles?.map((article, index) => {
                    return (
                        <div
                            key={"featured-article-" + article.slug.current}
                            className={clsx(
                                index === 0
                                    ? "order-2"
                                    : `order-${index === 1 ? "1" : "3"} mt-20 hidden lg:block`
                            )}
                        >
                            <VerticalArticle
                                article={article}
                                includeDescription
                                textAlign="text-center"
                            />
                        </div>
                    );
                })}
            </section>
            <CategoryArticles allArticles={category.articles} tags={tags} />
            <section className="mx-auto mb-8 max-w-xl space-y-8 text-2xl">
                <p>
                    For more travel recommendations, be sure to follow
                    @placeandplacebo on Instagram and sign up for my weekly
                    travel newsletter—including exclusive deals and
                    recommendations. If Words Like Silver makes a difference to
                    you, please consider donating towards the upkeep of the
                    site.
                </p>
                <div className="flex flex-col items-center gap-2 font-sailing-club text-3xl underline">
                    <Link href="/">Give your support</Link>
                    <Link href="/">Get the newsletter</Link>
                    <Link href="/">
                        {category.title === "BOOKS"
                            ? "Join the book club"
                            : "Follow on socials"}
                    </Link>
                </div>
                <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div
                            className="relative aspect-square w-full"
                            key={"grid-image-" + i}
                        >
                            <Image
                                src={`https://source.unsplash.com/random?${i}`}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
                <Link
                    href="/"
                    className="block text-center font-sailing-club text-3xl underline"
                >
                    Share with a friend
                </Link>
                <div className="mt-4 flex items-center justify-center gap-4">
                    <div>email</div>
                    <div>insta</div>
                    <div>twitter</div>
                </div>
            </section>
            <section className="mx-auto mb-16 max-w-7xl px-4 underline">
                <div className="flex flex-wrap items-center justify-around font-sailing-club text-xl lg:text-3xl">
                    {navigationItems?.map((navItem) => {
                        return (
                            <Link
                                href={"/" + navItem.slug.current}
                                className="px-4 text-center"
                                key={navItem.slug.current}
                            >
                                {navItem.title}
                            </Link>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
