import Navbar from "@/app/components/navbar";
import VerticalArticle from "@/app/components/vertical-article";
import { getAllCategorySlugs, getCategoryBySlug } from "@/app/lib/cms/queries";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
    const categorySlugs = await getAllCategorySlugs();

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
            description: category.description,
            siteName: "Words Like Silver",
            type: "website",
            url: `https://www.wordslikesilver.com/${params.category}`,
            locale: "en-US",
            authors: "Grace Smith",
        },
    };
}

export default async function Category({
    params,
}: {
    params: { category: string };
}) {
    const category = await getCategoryBySlug(params.category);
    if (!category) return redirect("/");
    return (
        <main>
            <section className="mx-auto my-16 max-w-3xl">
                <h1 className="my-8 text-balance bg-yellow-300 px-8 text-center font-sailing-club text-6xl">
                    {category.title}
                </h1>
                <p className="text-2xl">{category.description}</p>
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
                        follow on socials
                    </div>
                </div>
            </section>
            <section className="max-w-10xl mx-auto mb-32 grid grid-cols-[1fr,1.75fr,1fr] items-center gap-16 px-20">
                {category.featuredArticles.map((article) => (
                    <VerticalArticle
                        article={article}
                        key={"featured-article-" + article.slug.current}
                        includeDescription
                    />
                ))}
            </section>
            <section className="max-w-10xl relative mx-auto mb-32 px-28 pb-16 text-white">
                <div className="grid grid-cols-3 gap-16">
                    {category.articles.map((article) => (
                        <VerticalArticle
                            article={article}
                            key={"category-article-" + article.slug.current}
                            includeDescription
                            includeReadMore
                        />
                    ))}
                </div>
                <div className="absolute left-0 top-0 -z-10 mt-32 h-[calc(100%-8rem)] w-full bg-dark-green"></div>
                <div className="mt-32 flex justify-center gap-4 text-3xl">
                    <button className="font-sailing-club italic">first</button>
                    <button>{"<-----"}</button>
                    <div className="underline">1</div>
                    <button>{"----->"}</button>
                    <button className="font-sailing-club italic">last</button>
                </div>
            </section>
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
                    <Link href="/">Follow on socials</Link>
                </div>
                <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div className="relative aspect-square w-full">
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
            <section className="underline max-w-8xl mx-auto px-16">
                <Navbar hideLogo secondary fontSizeClassName="lg:text-3xl"/>
            </section>
        </main>
    );
}
