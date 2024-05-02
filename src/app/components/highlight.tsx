"use client";

import { useEffect, useRef, useState } from "react";
import { debounce } from "../lib/helpers";

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

    function getWordLines(parent: Element, children: HTMLCollection) {
        const lines: Element[][] = [];

        if (!children.length) return [[parent]];

        const { top: parentTop } = parent.getBoundingClientRect();
        let currentDeltaTop = 0;
        let lineIndex = 0;

        Array.from(children).forEach((child) => {
            const { top: childTop } = child.getBoundingClientRect();
            const deltaTop = childTop - parentTop;

            if (deltaTop > currentDeltaTop) {
                lineIndex++;
            }
            if (Array.isArray(lines[lineIndex])) {
                lines[lineIndex].push(child);
            } else {
                lines[lineIndex] = [child];
            }
            currentDeltaTop = deltaTop;
        });
        return lines;
    }

    function wrapWordLines(lines: Element[][]) {
        return lines
            .map(
                (line) =>
                    `<span class="highlight-span">\
${line.map((element) => element.outerHTML).join("")}\
<div class="highlight-container" style="animation-delay:${(Math.random() * 1).toFixed(1)}s; rotate: ${(Math.random() * 4 - 2).toFixed(2)}deg">\
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

        function resizeHandler() {
            debounce(() => {
                if (!allWordsRef.current) return;

                const children =
                    allWordsRef.current.getElementsByClassName(
                        "highlight-parent"
                    );

                const wordLines = getWordLines(allWordsRef.current, children);
                setHighlightHTML(wrapWordLines(wordLines));
            }, 750)();
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
