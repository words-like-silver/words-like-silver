import Image from "next/image";
import Link from "next/link";
import { getFeaturedBook } from "../lib/cms/queries";
import { processSanityBlock } from "../lib/text/process-sanity-block";
import Star from "./svg/star";

export default async function BookWidget() {
    const featuredBook = await getFeaturedBook();
    if (!featuredBook) return null;
    return (
        <div className="mx-auto block max-w-[18rem] border border-black px-4 py-8">
            <h2 className="mb-4 text-center font-sailing-club text-3xl italic">
                books
            </h2>
            <Link href={`/articles/${featuredBook.slug.current}`}>
                <div className="px-2">
                    <div className="relative aspect-book w-full transition-transform duration-300 hover:scale-[1.03] group">
                        <Image
                            src={featuredBook.mainImage.asset.url}
                            fill
                            alt="book"
                        />
                        {featuredBook.starred === true && (
                            <div className="absolute left-0 top-0 aspect-book h-full">
                                <div className="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 duration-300 transition-transform group-hover:rotate-6 group-hover:scale-125">
                                    <Star className="h-12 w-12" />
                                </div>
                            </div>
                        )}
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
