"use client";

import { useEffect, useRef, useState } from "react";
import { debounce } from "../lib/helpers";
import { getWordLines } from "../lib/text/text-helpers";

export default function Highlight({ text }: { text: string }) {
    const words = text.split(" ");
    const allWordsRef = useRef<HTMLSpanElement>(null);

    const [highlightHTML, setHighlightHTML] = useState(
        words
            .map(
                (word, index) =>
                    `<span class="highlight-parent">${word}${index !== words.length - 1 ? " " : ""}</span>`
            )
            .join("")
    );

    function wrapWordLines(lines: Element[][]) {
        return lines
            .map(
                (line) =>
                    `<span class="highlight-span">\
${line.map((element) => element.outerHTML).join("")}\
<div class="highlight-container" style="animation-delay:${(Math.random() * 1).toFixed(1)}s; rotate: ${(Math.random() * 2 - 1).toFixed(2)}deg">\
<div class="highlight-left"></div>\
<div class="highlight-middle"></div>\
<div class="highlight-right"></div>\
</div>\
</span>`
            )
            .join("");
    }

    useEffect(() => {
        if (!allWordsRef.current) return;

        const wordLines = getWordLines(
            allWordsRef.current,
            allWordsRef.current.children
        );
        setHighlightHTML(wrapWordLines(wordLines));
        if (
            allWordsRef.current.getElementsByClassName("highlight-parent")
                .length <= 1
        )
            return;

        function resizeHandler() {
            debounce(() => {
                if (!allWordsRef.current) return;

                const children =
                    allWordsRef.current.getElementsByClassName(
                        "highlight-parent"
                    );

                const wordLines = getWordLines(allWordsRef.current, children);
                setHighlightHTML(wrapWordLines(wordLines));
            }, 1000)();
        }

        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return (
        <span
            ref={allWordsRef}
            dangerouslySetInnerHTML={{ __html: highlightHTML }}
        ></span>
    );
}
