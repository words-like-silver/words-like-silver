import { Block } from "../cms/types";

export function processSanityBlock(block: Block) {
    if (block._type !== "block") return "";

    return block.children
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
            if (span.marks.length > 0 && block.markDefs?.[0]?.href) {
                html = `<a href=${block.markDefs.at(0)?.href} target="_blank" rel="noopenner noreferrer" style="text-decoration:underline">${html}</a>`;
            }
            return html;
        })
        .join("");
}

export function getTextFromBlock(block: Block) {
    return block.children?.map((span) => span.text).join("");
}
