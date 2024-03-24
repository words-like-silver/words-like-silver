"use server";
import "server-only";
import { cmsUrl } from "../constants";
import { Article, Category, NavigationItem, SanityResponse } from "./types";

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

export async function getNewArticles(limit: number) {
    return await get<Article>(
        `*[_type == 'article'][0...${limit}]{title,slug}|order(publishedAt desc)`
    );
}

export async function getArticlesByCategory(category: string, limit: number) {
    const categories = await get<Category>(
        `*[_type=="category" && title == "${category}"][0...${limit}]{"articles": *[_type=='article' && references(^._id)]{ title,slug }}|order(publishedAt desc)`
    );
    return categories.map((category) => category.articles).flat();
}

const exampleQueries = [
    `{mainImage{asset->{...}},`,
    `"categories": *[_type=='category' && references(^._id)]{title}}`,
];

async function get<T>(query: string) {
    try {
        const searchParams = new URLSearchParams();
        searchParams.append("query", query);
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
