"use server";
import "server-only";
import { cmsUrl } from "../constants";
import { getTextFromBlock } from "../text/process-sanity-block";
import {
    Article,
    Category,
    Homepage,
    NavigationItem,
    SanityResponse,
} from "./types";

export async function getNavigationItems() {
    return await get<NavigationItem>(
        "*[_type == 'navigation_item']|order(sort_order asc)"
    );
}

export async function getAllArticleSlugs() {
    const articles = await get<Article>("*[_type == 'article']{slug}");
    return articles.map((article) => article!.slug.current);
}

export async function getArticleBySlug(slug: string) {
    const articles = await get<Article>(
        `*[_type == 'article' && slug.current == '${slug}']{...,mainImage{asset->{url}},body[]{...,asset->{url,_id}},sidebar[]{...,asset->{url,_id}},"categories": *[_type == "category" && references(^._id)]{slug,title}}`
    );
    return articles.at(0);
}

export async function getNewArticles(limit: number) {
    return await get<Article>(
        `*[_type == 'article'][0...${limit}]{_id,title,slug,subhead,headerType,starred,"categories":*[_type == "category" && references(^._id)]{slug,title},mainImage{asset->{url}}}|order(publishedAt desc)`
    );
}

export async function getArticlesByCategory(
    category: string,
    start = 0,
    limit: number
) {
    const categories = await get<Category>(
        `*[_type=="category" && title == "${category}"]{articles[${start}...${limit}]->{_id,title,headerType,starred,slug,mainImage{asset->{url}}}}|order(publishedAt desc)`
    );
    return categories.map((category) => category!.articles).flat();
}

export async function getFeaturedArticle() {
    const homepages = await get<Homepage>(
        `*[_type=="homepage"]{featuredArticle->{_id,title,slug,mainImage{asset->{url}}}}`
    );
    return homepages.at(0)?.featuredArticle;
}

export async function getFeaturedArticleSecondary() {
    const homepages = await get<Homepage>(
        `*[_type=="homepage"]{featuredArticleSecondary->{title,slug,mainImage{asset->{url}}}}`
    );
    return homepages.at(0)?.featuredArticleSecondary;
}

export async function getHorizontalArticles() {
    const homepages = await get<Homepage>(
        `*[_type == 'homepage']{topBarArticles[]->{_id,title,slug,headerType,starred,mainImage{asset->{url}}}}`
    );
    return homepages.at(0)?.topBarArticles;
}

export async function getFeaturedArticleRow() {
    const homepages = await get<Homepage>(
        `*[_type == 'homepage']{featuredArticleRow[]->{_id,title,slug,headerType,starred,mainImage{asset->{url}},"categories":*[_type == "category" && references(^._id)]{slug,title}}}`
    );
    return homepages.at(0)?.featuredArticleRow;
}

export async function getFeaturedCategory(limit: number) {
    const homepages = await get<Homepage>(
        `*[_type=="homepage"]{featuredCategory->{...,articles[0...${limit}]->{title,slug,headerType,starred,mainImage{asset->{url}}}}}`
    );
    return homepages.at(0)?.featuredCategory;
}
export async function getAllCategorySlugs() {
    const categories = await get<Category>("*[_type == 'category']{slug}");
    return categories.map((category) => category!.slug.current);
}

export async function getCategoryBySlug(slug: string) {
    const categories = await get<Category>(
        `*[_type == 'category' && slug.current == '${slug}']{...,articles[]->{title,slug,subhead,headerType,starred,tags[]->{name},mainImage{asset->{url}}}, featuredArticles[]->{title,slug,subhead,headerType,starred,mainImage{asset->{url}}}}`
    );
    return categories.at(0);
}

export async function getAllArticles() {
    const articles = await get<Article>(
        `*[_type == 'article']{title,subhead,slug,headerType,starred,mainImage{asset->{url}}}`
    );
    return articles.map((article) => ({
        ...article,
        titleText: getTextFromBlock(article.title[0]),
    }));
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
        return [] as Array<T>;
    }
}
