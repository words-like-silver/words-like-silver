"use client";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useMemo, useRef, useState } from "react";

export default function BookCarousel() {
    const NUM_BOOKS = 11;
    const MIN_SCALE = 0.65;
    const MAX_SCALE = 1.1;
    const DISTANCE_TO_SMALLEST = 3;

    const generateScales = (selectedIndex: number) => {
        const incrementAmount = (MAX_SCALE - MIN_SCALE) / DISTANCE_TO_SMALLEST;

        let current_scale =
            selectedIndex < DISTANCE_TO_SMALLEST
                ? MAX_SCALE - (selectedIndex + 1) * incrementAmount
                : MIN_SCALE;
        return Array.from({ length: NUM_BOOKS }).map((_, index) => {
            if (Math.abs(selectedIndex - index) < DISTANCE_TO_SMALLEST) {
                if (index === selectedIndex) {
                    current_scale = MAX_SCALE;
                } else if (index < selectedIndex) {
                    current_scale += incrementAmount;
                } else if (index > selectedIndex) {
                    current_scale -= incrementAmount;
                }
                return current_scale.toFixed(2);
            } else {
                return MIN_SCALE.toFixed(2);
            }
        });
    };

    const defaultScales = useMemo(
        () => generateScales(Math.floor(NUM_BOOKS / 2)),
        []
    );

    const [scales, setScales] = useState(defaultScales);
    const [selectedIndex, setSelectedIndex] = useState(
        Math.floor(NUM_BOOKS / 2)
    );

    const handleMouseOver = (index: number) => {
        setSelectedIndex(index);
        setScales(generateScales(index));
    };

    const handleMouseLeave = () => {
        setSelectedIndex(Math.floor(NUM_BOOKS / 2));
        setScales(defaultScales);
        setCursorPositionPercentage(50);
    };

    const gradientRef = useRef<HTMLDivElement>(null);
    const [cursorPositionPercentage, setCursorPositionPercentage] =
        useState(50);

    const handleMouseMove = (e: MouseEvent) => {
        const rect = gradientRef.current?.getBoundingClientRect();
        if (!rect) return;
        const divWidth = rect.width;
        const cursorPosition = e.clientX - rect.x;
        const cursorPositionPercentage = (cursorPosition / divWidth) * 100;
        if (cursorPositionPercentage < 10) setCursorPositionPercentage(10);
        else if (cursorPositionPercentage > 90) setCursorPositionPercentage(90);
        else setCursorPositionPercentage(cursorPositionPercentage);
    };

    return (
        <section className="relative overflow-hidden py-16">
            <h2 className="relative z-20 mb-16 text-center text-3xl">
                RECENTLY READ
            </h2>
            <div
                className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full"
                ref={gradientRef}
                style={{
                    backgroundImage: `linear-gradient(to right, #FAF8F1 0%, transparent ${cursorPositionPercentage - 7}%, transparent ${cursorPositionPercentage}%, transparent ${cursorPositionPercentage + 7}%, #FAF8F1 100%)`,
                }}
            ></div>
            <div
                className="ml-[50%] flex w-fit -translate-x-1/2 items-center justify-center overflow-visible"
                onMouseLeave={() => {
                    handleMouseLeave();
                }}
                onMouseMove={handleMouseMove}
            >
                {Array.from({ length: NUM_BOOKS }).map((_, index) => (
                    <Link
                        className="relative aspect-book w-32 transition-transform lg:w-44"
                        key={index}
                        onMouseOver={() => handleMouseOver(index)}
                        style={{
                            transform: `scale(${Number(scales[index]) * (selectedIndex === index ? 1.2 : 1)}) ${selectedIndex === index ? (index < Math.floor(NUM_BOOKS / 2) ? "rotate(-5deg)" : index > Math.floor(NUM_BOOKS / 2) ? "rotate(5deg)" : "") : ""}`,
                            ...(selectedIndex === index && { zIndex: 1 }),
                        }}
                        href={`/articles/${"test"}`}
                    >
                        <Image
                            src={`https://source.unsplash.com/random?${index}`}
                            alt="book"
                            fill
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
