import { Body } from "@/app/lib/cms/types";

export default function Quote({ body }: { body: Body }) {
    if (body._type !== "quote") return null;
    return (
        <blockquote className="my-12 text-balance text-center font-sailing-club text-3xl italic">
            &ldquo;{body.text}&rdquo;
        </blockquote>
    );
}
