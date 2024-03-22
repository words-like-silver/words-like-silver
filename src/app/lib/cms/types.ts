interface Document {
    _createdAt: string;
    _rev: string;
    _type: string;
    _id: string;
    _updatedAt: string;
}

interface SanitySuccess<T> {
    query: string;
    result: T[];
    ms: number;
    error: undefined;
}

interface SanityError {
    success: false;
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

export interface Body extends Document {
    _type: "block";
    style: string;
    children: {
        _type: "span";
        marks: [];
        text: string;
        _key: string;
    }[];
    markDefs: [];
}

interface Image extends Document {
    _type: "image";
    asset: {
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
    };
}

export interface Article extends Document {
    _type: "article";
    title: string;
    subhead: string;
    slug: Slug;
    mainImage: Image;
    categories: Category[];
    body: Body[];
}
