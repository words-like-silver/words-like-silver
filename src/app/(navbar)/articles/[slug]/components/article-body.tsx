import { Article } from "@/app/lib/cms/types";
import { articleBodyMap } from "@/app/lib/constants";

export default function ArticleBody({ article }: { article: Article }) {
    return (
        <section className="mb-44 max-w-3xl">
            {article.body?.map((block) =>
                (
                    articleBodyMap[block._type || "block"] ||
                    articleBodyMap["block"]
                )(block)
            )}
        </section>
    );
}
