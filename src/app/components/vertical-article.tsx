import Image from "next/image";
import Link from "next/link";

export default function VerticalArticle({
    article,
    includeDescription,
    includeReadMore,
}: {
    article: string;
    includeDescription?: boolean;
    includeReadMore?: boolean;
}) {
    return (
        <Link href="/" className="block">
            <h3 className="mb-4 inline-block w-full text-center font-sailing-club text-3xl italic">
                travel
            </h3>
            <div className="relative mx-auto aspect-square h-64 lg:h-auto lg:w-full">
                <Image
                    src={`https://source.unsplash.com/random?${article[0]}`}
                    fill
                    className="object-cover"
                    alt=""
                />
            </div>
            <div className="py-8 text-center text-3xl underline">{article}</div>
            {includeDescription && (
                <p className="inline-block text-xl">
                    I’ve spent the last five years writing, revising, and
                    developing the characters from my YA Southern Gothic,
                    Mountain Sounds, which is soon to hit shelves next week.
                    Here’s how I did it.
                </p>
            )}
            {includeReadMore && (
                <Link
                    href="/"
                    className="mt-8 block text-center font-sailing-club text-3xl italic underline"
                >
                    read more
                </Link>
            )}
        </Link>
    );
}
