"use server";
import { getAllArticles } from "@/app/lib/cms/queries";
import Fuse from "fuse.js";
import "server-only";

export async function searchArticles(query: string) {
    const articles = await getAllArticles();
    const fuseOptions = {
        keys: ["titleText", "subhead"],
        threshold: 0.3,
    };

    const fuse = new Fuse(articles, fuseOptions);
    const results = fuse.search(query);

    return { articles: results };
}
