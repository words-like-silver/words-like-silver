"use server";
import "server-only";
import { cmsUrl } from "../constants";
import { Article, NavigationItem, SanityResponse } from "./types";

export async function getNavigationItems() {
    return await get<NavigationItem>("*[_type == 'navigation_item']");
}

export async function getAllArticleSlugs() {
    const articles = await get<Article>("*[_type == 'article']{slug}");
    return articles.map((article) => article.slug.current);
}

export async function getArticleBySlug(slug: string) {
    const articles = await get<Article>(
        `*[_type == 'article' && slug.current == '${slug}']`
    );
    return articles?.[0];
}

const exampleQueries = [
    `{mainImage{asset->{...}},`,
    `"categories": *[_type=='category' && references(^._id)]{title}}`,
];

async function get<T>(query: string) {
    try {
        const searchParams = new URLSearchParams();
        searchParams.append("query", query);
        console.log(searchParams.toString());
        const res = await fetch(cmsUrl + "?" + searchParams.toString(), {
            method: "GET",
        });
        const data = (await res.json()) as SanityResponse<T>;
        if (data.error) throw new Error(data.error.description);
        return data.result;
    } catch (error) {
        console.error(error);
        return [];
    }
}
