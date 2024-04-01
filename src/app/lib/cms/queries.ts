"use server";
import "server-only";
import { cmsUrl } from "../constants";
import {
    Article,
    Category,
    Homepage,
    NavigationItem,
    SanityResponse,
} from "./types";

export async function getNavigationItems() {
    return await get<NavigationItem>("*[_type == 'navigation_item']");
}

export async function getAllArticleSlugs() {
    const articles = await get<Article>("*[_type == 'article']{slug}");
    return articles.map((article) => article.slug.current);
}

export async function getArticleBySlug(slug: string) {
    const articles = await get<Article>(
        `*[_type == 'article' && slug.current == '${slug}']{...,mainImage{asset->{url}},body[]{...,asset->{url,_id}},"categories": *[_type == "category" && references(^._id)]{slug,title}}`
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
        `*[_type=="category" && title == "${category}"][0...${limit}]{articles[]->{ title,slug,mainImage{asset->{url}}}}|order(publishedAt desc)`
    );
    return categories.map((category) => category.articles).flat();
}

export async function getFeaturedArticle() {
    const article = await get<Homepage>(
        `*[_type=="homepage"]{featured_article->{title,slug,mainImage{asset->{url}}}}`
    );
    return article[0].featured_article;
}

export async function getHorizontalArticles() {
    const articles = await get<Homepage>(
        `*[_type == 'homepage']{top_bar_articles[]->{title,slug,mainImage{asset->{url}}}}`
    );
    return articles;
}

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
