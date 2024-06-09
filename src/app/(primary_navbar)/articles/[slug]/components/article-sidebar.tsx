import { Article } from "@/app/lib/cms/types";
import { articleBodyMap } from "@/app/lib/constants";

export default function ArticleSidebar({ article }: { article: Article }) {
    if (!article.sidebar) return <div className="py-8 xl:w-72 xl:pr-8"></div>;
    return (
        <section className="h-fit max-w-lg border-y border-black py-8 xl:w-72 xl:border-y-0 xl:border-r xl:pr-8">
            {article.sidebar &&
                article.sidebar?.map((block) =>
                    (
                        articleBodyMap[block._type || "block"] ||
                        articleBodyMap["block"]
                    )(block, {
                        p: "text-center xl:text-right",
                        noBackground: true,
                    })
                )}
        </section>
    );
}
