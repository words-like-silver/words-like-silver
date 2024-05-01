import Highlight from "@/app/components/highlight";
import { ReactNode } from "react";
import { Block } from "../cms/types";

export function processSanityBlock(block: Block) {
    if (block._type !== "block") return "";

    return block.children.map((span) => {
        if (span.marks.length === 0) {
            if (span.text === "") return <br />;
            return span.text;
        }
        let html = span.marks.reduce((acc: ReactNode, mark: ReactNode) => {
            if (mark === "strong") return <strong>{acc}</strong>;
            if (mark === "em") return <em>{acc}</em>;
            if (mark === "underline") return <u>{acc}</u>;
            if (mark === "strike-through") return <s>{acc}</s>;
            if (mark === "code") return <code>{acc}</code>;
            if (mark === "highlight") {
                return <Highlight text={acc?.toString() || ""} />;
            }
            if (mark === "sailing-club") {
                return <span className="font-sailing-club">{acc}</span>;
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
