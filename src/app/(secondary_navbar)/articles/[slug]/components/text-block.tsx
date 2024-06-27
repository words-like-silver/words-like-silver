import { Body } from "@/app/lib/cms/types";
import { processSanityBlock } from "@/app/lib/text/process-sanity-block";
import clsx from "clsx";

interface TextBlockOptions {
    p?: string;
    noBackground?: boolean;
}

export default function TextBlock({
    body,
    options,
}: {
    body: Body;
    options?: TextBlockOptions;
}) {
    if (body._type !== "block") return null;

    const innerHtml = processSanityBlock(body);

    if (body.style === "h2") {
        return (
            <h2 className="mb-4 mt-10 text-center font-sailing-club text-5xl">
                {innerHtml}
            </h2>
        );
    }

    if (body.style === "h3") {
        return (
            <h3 className="mb-4 mt-10 text-center font-sailing-club text-4xl">
                {innerHtml}
            </h3>
        );
    }
    if (body.style === "h4") {
        return (
            <h4 className="mb-4 mt-10 text-center font-sailing-club text-3xl">
                {innerHtml}
            </h4>
        );
    }
    if (body.style === "h5") {
        return (
            <h5 className="mb-4 mt-10 text-center font-sailing-club text-2xl">
                {innerHtml}
            </h5>
        );
    }
    return (
        <p className={clsx("my-6 text-xl lg:my-10 lg:text-2xl", options?.p)}>
            {innerHtml}
        </p>
    );
}
