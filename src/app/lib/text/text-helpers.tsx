export function getWordLines(parent: Element, children: HTMLCollection) {
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
