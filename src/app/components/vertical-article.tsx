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
            <h3 className="italic inline-block w-full font-sailing-club text-center mb-4 text-3xl">
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
            <div className="text-center text-4xl underline py-8">{article}</div>
            {includeDescription && (
                <p className="text-3xl inline-block">
                    I’ve spent the last five years writing, revising, and
                    developing the characters from my YA Southern Gothic,
                    Mountain Sounds, which is soon to hit shelves next week.
                    Here’s how I did it.
                </p>
            )}
            {includeReadMore && (
                <Link
                    href="/"
                    className="block font-sailing-club italic text-3xl mt-8 underline text-center"
                >
                    read more
                </Link>
            )}
        </Link>
    );
}
