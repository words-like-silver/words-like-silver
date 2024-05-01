import { Body } from "@/app/lib/cms/types";
import { processSanityBlock } from "@/app/lib/text/process-sanity-block";
import clsx from "clsx";

export default function TextBlock({
    body,
    options,
}: {
    body: Body;
    options?: Record<string, any>;
}) {
    if (body._type !== "block") return null;

    const innerHtml = processSanityBlock(body);

    if (body.style === "h2") {
        return (
            <h2 className="text-center font-sailing-club text-5xl">
                {innerHtml}
            </h2>
        );
    }

    if (body.style === "h3") {
        return (
            <h2 className="text-center font-sailing-club text-4xl">
                {innerHtml}
            </h2>
        );
    }
    if (body.style === "h4") {
        return (
            <h2 className="text-center font-sailing-club text-3xl">
                {innerHtml}
            </h2>
        );
    }
    if (body.style === "h5") {
        return (
            <h2 className="text-center font-sailing-club text-2xl">
                {innerHtml}
            </h2>
        );
    }
    return (
        <p className={clsx("text-2xl", options?.center && "text-center")}>
            {innerHtml}
        </p>
    );
}
