"use client";
import Image from "next/image";

export default function RandomUnderline() {
    const NUM_VARIATIONS = 4;
    const variation = Math.floor(Math.random() * NUM_VARIATIONS + 1);

    return (
        <div className="relative h-7 w-full">
            <Image
                src={`/images/underline_${variation}.png`}
                alt=""
                fill
                className="object-contain"
            />
        </div>
    );
}
