import { Body } from "@/app/lib/cms/types";
import clsx from "clsx";

export default function TextBlock({
    body,
    options,
}: {
    body: Body;
    options?: Record<string, any>;
}) {
    if (body._type !== "block") return null;

    let innerHtml = body.children
        .map((span) => {
            if (span.marks.length === 0) {
                if (span.text === "") return `<br/>`;
                return span.text;
            }
            let html = span.marks.reduce((acc: string, mark: string) => {
                if (mark === "strong") return `<strong>${acc}</strong>`;
                if (mark === "em") return `<em>${acc}</em>`;
                if (mark === "underline") return `<u>${acc}</u>`;
                if (mark === "strike-through") return `<s>${acc}</s>`;
                if (mark === "code") return `<code>${acc}</code>`;
                if (mark === "highlight")
                    return `<span style="background-color:yellow">${acc}</span>`;
                if (mark === "sailing-club") {
                    return `<span style="font-family:var(--font-sailing-club)">${acc}</span>`;
                }
                return acc;
            }, span.text);
            if (span.marks.length > 0 && body.markDefs?.[0]?.href) {
                html = `<a href=${body.markDefs.at(0)?.href} target="_blank" rel="noopenner noreferrer" style="text-decoration:underline">${html}</a>`;
            }
            return html;
        })
        .join("");

    if (body.style === "h2") {
        return (
            <h2
                className="text-center font-sailing-club text-5xl"
                dangerouslySetInnerHTML={{
                    __html: innerHtml,
                }}
            ></h2>
        );
    }

    if (body.style === "h3") {
        return (
            <h2
                className="text-center font-sailing-club text-4xl"
                dangerouslySetInnerHTML={{
                    __html: innerHtml,
                }}
            ></h2>
        );
    }
    if (body.style === "h4") {
        return (
            <h2
                className="text-center font-sailing-club text-3xl"
                dangerouslySetInnerHTML={{
                    __html: innerHtml,
                }}
            ></h2>
        );
    }
    if (body.style === "h5") {
        return (
            <h2
                className="text-center font-sailing-club text-2xl"
                dangerouslySetInnerHTML={{
                    __html: innerHtml,
                }}
            ></h2>
        );
    }
    return (
        <p
            className={clsx("text-2xl", options?.center && "text-center")}
            dangerouslySetInnerHTML={{
                __html: innerHtml,
            }}
        ></p>
    );
}
