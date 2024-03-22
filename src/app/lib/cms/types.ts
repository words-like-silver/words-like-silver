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

export interface NavigationItem extends Document {
    _type: "navigation_item";
    title: string;
    slug: {
        current: string;
        _type: "slug";
    };
    sort_order: number;
}
