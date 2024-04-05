import { Article } from "@/app/lib/cms/types";
import { articleBodyMap } from "@/app/lib/constants";

export default function ArticleSidebar({ article }: { article: Article }) {
    if (!article.sidebar) return null;
    return (
        <section className="w-96">
            {article.sidebar &&
                article.sidebar?.map((block) =>
                    (
                        articleBodyMap[block._type || "block"] ||
                        articleBodyMap["block"]
                    )(block, {
                        center: true,
                        noBackground: true,
                    })
                )}
        </section>
    );
}
