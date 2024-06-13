"use client";

import { Article } from "../lib/cms/types";
import VerticalArticle from "./vertical-article";

export default function MobileArticlesCarousel({
    articles,
}: {
    articles: Article[];
}) {
    return (
        <div className="mx-auto px-16 lg:hidden">
            {articles.map((article) => (
                <VerticalArticle
                    key={"mobile-articles-carousel-" + article._id}
                    article={article}
                    includeCategory
                />
            ))}
        </div>
    );
}
