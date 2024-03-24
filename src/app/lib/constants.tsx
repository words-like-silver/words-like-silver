import ArticleImage from "../(navbar)/articles/[slug]/components/article-image";
import Quote from "../(navbar)/articles/[slug]/components/quote";
import TextBlock from "../(navbar)/articles/[slug]/components/text-block";
import { Body } from "./cms/types";

export const cmsUrl =
    (process.env.CMS_URL || "") + process.env.CMS_DATABASE_NAME;

export enum BodyType {
    Block = "block",
    Image = "image",
}

export const articleBodyMap: {
    [key: string]: (body: Body) => JSX.Element;
} = {
    block: (body: Body) => <TextBlock key={body._key} body={body} />,
    quote: (body: Body) => <Quote key={body._key} body={body} />,
    image: (body: Body) => <ArticleImage key={body._key} body={body} />,
};
