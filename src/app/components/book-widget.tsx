import Image from "next/image";
import Link from "next/link";
import { getFeaturedBook } from "../lib/cms/queries";
import { processSanityBlock } from "../lib/text/process-sanity-block";

export default async function BookWidget() {
    const featuredBook = await getFeaturedBook();
    if (!featuredBook) return null;
    return (
        <div className="mx-auto block max-w-[18rem] border border-black px-4 py-8">
            <h2 className="mb-4 text-center font-sailing-club text-3xl italic">
                books
            </h2>
            <Link href={`/articles/${featuredBook.slug.current}`}>
                <div className="px-6">
                    <div className="relative aspect-book w-full">
                        <Image
                            src={featuredBook.mainImage.asset.url}
                            fill
                            alt="book"
                        />
                    </div>
                </div>
                <h3 className="my-4 text-center text-2xl [text-decoration:inherit]">
                    {processSanityBlock(featuredBook.title[0])}
                </h3>
                <div className="mb-2 text-center font-sailing-club text-2xl italic">
                    my review
                </div>
            </Link>
            <Link
                href="/books"
                className="block text-center font-sailing-club text-2xl italic"
            >
                all book posts
            </Link>
        </div>
    );
}
