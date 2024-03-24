import { Body } from "@/app/lib/cms/types";

export default function TextBlock({ body }: { body: Body }) {
    if (body._type !== "block") return null;
    return (
        <p
            className="mb-8 text-2xl"
            dangerouslySetInnerHTML={{
                __html: body.children
                    .map((span) => {
                        if (span.marks.length === 0) return span.text;
                        return span.marks.reduce(
                            (acc: string, mark: string) => {
                                if (mark === "strong")
                                    return `<strong>${acc}</strong>`;
                                if (mark === "em") return `<em>${acc}</em>`;
                                if (mark === "underline")
                                    return `<u>${acc}</u>`;
                                if (mark === "strike-through")
                                    return `<s>${acc}</s>`;
                                if (mark === "code")
                                    return `<code>${acc}</code>`;
                                if (mark === "highlight")
                                    return `<span style="background-color:yellow">${acc}</span>`;
                                return acc;
                            },
                            span.text
                        );
                    })
                    .join(""),
            }}
        ></p>
    );
}