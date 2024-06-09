import { Body } from "@/app/lib/cms/types";
import Image from "next/image";

export default function Quote({ body }: { body: Body }) {
    if (body._type !== "quote") return null;
    return (
        <blockquote className="relative my-8 text-balance py-4 text-center font-sailing-club text-2xl lg:text-3xl">
            &ldquo;{body.text}&rdquo;
            <div className="absolute left-0 top-0 -z-10 flex h-full w-full justify-center opacity-60">
                <div className="aspect-square h-full">
                    <Image
                        src="/images/paper_background.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </blockquote>
    );
}
