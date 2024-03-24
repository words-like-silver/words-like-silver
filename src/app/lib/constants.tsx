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
    block: (body: Body) => <TextBlock key={body._id} body={body} />,
};
