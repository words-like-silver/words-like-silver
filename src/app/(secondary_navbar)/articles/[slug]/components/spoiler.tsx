"use client";

import clsx from "clsx";
import { MouseEvent, useState } from "react";
import { createPortal } from "react-dom";

export default function Spoiler({ text }: { text: string }) {
    const [isHidden, setIsHidden] = useState(true);
    const [showTooltip, setShowTooltip] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const updateMousePosition = (e: MouseEvent) => {
        const x = e.clientX + 10;
        const y = e.clientY + 10;
        setMousePosition({ x, y });
    };

    return (
        <>
            <span
                className={clsx(
                    isHidden
                        ? "selection:bg-black/90"
                        : "transition-colors duration-1000"
                )}
                style={{
                    backgroundColor: isHidden ? "black" : "transparent",
                    cursor: isHidden ? "pointer" : "auto",
                }}
                onClick={() => {
                    setShowTooltip(false);
                    setIsHidden(!isHidden);
                }}
                onMouseEnter={() => {
                    if (isHidden) setShowTooltip(true);
                }}
                onMouseLeave={() => setShowTooltip(false)}
                onMouseMove={updateMousePosition}
            >
                {text}
            </span>
            {showTooltip &&
                createPortal(
                    <div
                        className="pointer-events-none fixed rounded-md bg-black px-4 py-2 text-white transition-opacity duration-200"
                        style={{
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y}px`,
                        }}
                    >
                        <div className="text-center">Spoiler!</div>
                        <div className="text-center text-white/80">
                            (click to reveal)
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}
