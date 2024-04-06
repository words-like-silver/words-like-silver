import VerticalArticle from "@/app/components/vertical-article";
import { getAllCategorySlugs, getCategoryBySlug } from "@/app/lib/cms/queries";
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
            <section className="max-w-10xl mb-32 px-32 mx-auto grid grid-cols-[1fr,1.75fr,1fr] items-center gap-16">
                {category.featuredArticles.map((article) => (
                    <VerticalArticle
                        article={article}
                        key={article.slug.current}
                        includeDescription
                    />
                ))}
            </section>
        </main>
    );
}
