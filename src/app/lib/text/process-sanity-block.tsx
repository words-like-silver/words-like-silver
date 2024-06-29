import Spoiler from "@/app/(secondary_navbar)/articles/[slug]/components/spoiler";
import Highlight from "@/app/components/highlight";
import { ReactNode } from "react";
import { Block } from "../cms/types";

function customJoin<T>(arr: T[], separator: Element) {
    if (!Array.isArray(arr)) {
        throw new TypeError("First argument must be an array");
    }
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            result += separator;
        }
        if (arr[i] !== undefined && arr[i] !== null) {
            result += arr[i];
        }
    }
    return result;
}

export function processSanityBlock(block: Block) {
    if (block._type !== "block") return "";

    return block.children.map((span) => {
        const key = Math.random();

        if (span.text.includes("\n")) {
            const groups = /(.*)(\n)(.*)/g.exec(span.text);
            span.text = groups?.slice(1).map((group) => {
                if (group === "\n") return <br />;
                return group;
            }) as any;
        }

        if (span.marks.length === 0) {
            if (span.text === "" || span.text === "\n") return <br />;
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
            if (mark === "spoiler") {
                return <Spoiler text={acc?.toString() || ""} key={key} />;
            }
            if (
                block.markDefs
                    .map((markDef) => markDef._key)
                    .includes(String(mark))
            ) {
                const markDef = block.markDefs.find(
                    (markDef) => markDef._key === mark
                );
                if (markDef?._type === "link") {
                    return (
                        <a
                            href={markDef.href}
                            target="_blank"
                            rel="noopenner noreferrer"
                            className="underline"
                            key={key}
                        >
                            {acc}
                        </a>
                    );
                }
            }
            return acc;
        }, span.text);
        return html;
    });
}

export function getTextFromBlock(block: Block) {
    return block.children?.map((span) => span.text).join("");
}
