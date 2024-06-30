import { HeaderType } from "../constants";

interface Document {
    _createdAt: string;
    _rev: string;
    _type: string;
    _id: string;
    _updatedAt: string;
}

interface SanitySuccess<T> {
    query: string;
    result: Array<T>;
    ms: number;
    error: undefined;
}

interface SanityError {
    error: {
        description: string;
        names: string[];
        type: string;
    };
}

export type SanityResponse<T> = SanitySuccess<T> | SanityError;

export interface Category extends Document {
    _type: "category";
    title: string;
    articles: Article[];
    slug: Slug;
    description: string | null;
    featuredArticles: Article[] | null;
}

export type Slug = {
    current: string;
    _type: "slug";
};

export interface NavigationItem extends Document {
    _type: "navigation_item";
    title: string;
    slug: Slug;
    sort_order: number;
}

type Marks =
    | "em"
    | "strong"
    | "code"
    | "underline"
    | "strike-through"
    | "highlight";
type Style = "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Span {
    _type: "span";
    marks: Marks[];
    text: string;
    _key: string;
}

interface Quote {
    _type: "quote";
    _key: string;
    text: string;
    type: "italic" | "background";
}

interface MarkDefs {
    _type: "link";
    _key: string;
    href: string;
}
export interface Block extends Document {
    _type: "block";
    _key: string;
    style: Style;
    children: Span[];
    markDefs: MarkDefs[];
    level?: number;
    listItem?: "bullet" | "number";
}

export type Body = Block | Image | Quote;

interface Asset extends Document {
    _type: "sanity.imageAsset";
    path: string;
    metadata: [Object];
    assetId: string;
    extension: string;
    size: number;
    mimeType: string;
    url: string;
    originalFilename: string;
    uploadId: string;
    sha1hash: string;
}
export interface Image extends Document {
    _type: "image";
    _key: string;
    asset: Asset;
    alt: string;
    caption: Block[];
}

export interface Article extends Document {
    _type: "article";
    title: [Block];
    subhead: string;
    slug: Slug;
    mainImage: Image;
    categories: Category[];
    body: Body[] | null;
    sidebar: Body[] | null;
    headerType: HeaderType;
    tags: Tag[] | null;
    starred: boolean;
}

export interface Homepage extends Document {
    _type: "homepage";
    featuredArticle: Article;
    featuredArticleSecondary: Article;
    topBarArticles: Article[];
    featuredArticleRow: Article[];
    featuredCategory: Category;
    featuredBook: Article;
}

export interface Tag {
    _type: "tag";
    name: string;
}
