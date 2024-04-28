import Link from "next/link";
import { getAllCategorySlugs } from "../../lib/cms/queries";

export default async function Categories() {
    const categorySlugs = await getAllCategorySlugs();
    return (
        <div className="flex flex-col items-center py-32">
            {categorySlugs.map((slug, index) => {
                return (
                    <Link
                        key={"category-" + slug + index}
                        href={"/" + slug}
                        className="px-4 py-4 text-3xl text-black"
                    >
                        {slug}
                    </Link>
                );
            })}
        </div>
    );
}
