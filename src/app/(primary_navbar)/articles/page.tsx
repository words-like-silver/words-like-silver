import Link from "next/link";
import { getAllArticleSlugs } from "../../lib/cms/queries";

export default async function Articles() {
    const articleSlugs = await getAllArticleSlugs();
    return (
        <div className="flex flex-col items-center py-32">
            {articleSlugs.map((slug, index) => {
                return (
                    <Link
                        key={"articles-" + slug + index}
                        href={"/articles/" + slug}
                        className="px-4 py-4 text-3xl text-black"
                    >
                        {slug}
                    </Link>
                );
            })}
        </div>
    );
}
