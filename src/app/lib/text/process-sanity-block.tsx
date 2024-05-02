import Highlight from "@/app/components/highlight";
import { ReactNode } from "react";
import { Block } from "../cms/types";

export function processSanityBlock(block: Block) {
    if (block._type !== "block") return "";

    return block.children.map((span) => {
        const key = Math.random();
        if (span.marks.length === 0) {
            if (span.text === "") return <br />;
            return span.text;
        }
        let html = span.marks.reduce((acc: ReactNode, mark: ReactNode) => {
            if (mark === "strong") return <strong key={key}>{acc}</strong>;
            if (mark === "em") return <em key={key}>{acc}</em>;
            if (mark === "underline") return <u key={key}>{acc}</u>;
            if (mark === "strike-through") return <s key={key}>{acc}</s>;
            if (mark === "code") return <code key={key}>{acc}</code>;
            if (mark === "highlight") {
                return <Highlight text={acc?.toString() || ""} key={key} />;
            }
            if (mark === "sailing-club") {
                return (
                    <span className="font-sailing-club" key={key}>
                        {acc}
                    </span>
                );
            }
            return acc;
        }, span.text);
        if (span.marks.length > 0 && block.markDefs?.[0]?.href) {
            html = (
                <a
                    href={block.markDefs.at(0)?.href}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="underline"
                    key={key}
                >
                    {html}
                </a>
            );
        }
        return html;
    });
}

export function getTextFromBlock(block: Block) {
    return block.children?.map((span) => span.text).join("");
}
