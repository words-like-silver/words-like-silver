"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function BookCarousel() {
    const NUM_BOOKS = 11;
    const MIN_SCALE = 0.75;
    const MAX_SCALE = 1;
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
    };

    return (
        <section className="overflow-hidden py-16">
            <h2 className="mb-16 text-center text-3xl">RECENTLY READ</h2>
            <div
                className="relative ml-[50%] flex w-fit -translate-x-1/2 items-center justify-center overflow-visible"
                onMouseLeave={() => {
                    handleMouseLeave();
                }}
            >
                {/* <div className="pointer-events-none absolute z-10 h-full w-full bg-gradient-to-r from-beige via-transparent to-beige"></div> */}
                {Array.from({ length: NUM_BOOKS }).map((_, index) => (
                    <Link
                        className="relative aspect-book w-32 lg:w-44 transition-transform"
                        key={index}
                        onMouseOver={() => handleMouseOver(index)}
                        style={{
                            transform: `scale(${Number(scales[index]) * (selectedIndex === index ? 1.2 : 1)}) ${selectedIndex === index ? "rotate(5deg)" : ""}`,
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
