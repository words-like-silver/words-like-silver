"use client";

import { useEffect, useRef, useState } from "react";

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

    function getWordLines(parent: Element) {
        const lines: Element[][] = [];
        const children = parent.children;

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
<div class="highlight-container">\
<div class="highlight-left"></div>\
<div class="highlight-middle"></div>\
<div class="highlight-right"></div>\
</div>\
</span>`
            )
            .join("");
    }

    function stripOutUnnecessaryHtml(element: Element) {
        const strippedElement = element.cloneNode(true) as Element;

        console.log({ strippedElement, children: strippedElement.children });

        strippedElement
            .getElementsByClassName("highlight-container")[0]
            .remove();

        const highlightParents =
            strippedElement.getElementsByClassName("highlight-parent");

        console.log({ strippedElement, children: strippedElement.children });

        Array.from(highlightParents).forEach((parent) => {
            const children = parent.children;
            if (children.length) {
                Array.from(children).forEach((child) =>
                    strippedElement.append(child)
                );
                parent.remove();
            }
        });
        console.log({ strippedElement, children: strippedElement.children });

        return strippedElement;
    }

    useEffect(() => {
        if (!allWordsRef.current) return;

        const wordLines = getWordLines(allWordsRef.current);
        setHighlightHTML(wrapWordLines(wordLines));

        // function resizeHandler() {
        //     debounce(() => {
        //         if (!allWordsRef.current) return;
        //         console.log("running");
        //         const strippedWordsRef = stripOutUnnecessaryHtml(
        //             allWordsRef.current
        //         );
        //         const wordLines = getWordLines(strippedWordsRef);
        //         setHighlightHTML(wrapWordLines(wordLines));
        //     }, 750)();
        // }

        // window.addEventListener("resize", resizeHandler);
        //
        // return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return (
        <span
            ref={allWordsRef}
            dangerouslySetInnerHTML={{ __html: highlightHTML }}
        ></span>
    );
}
