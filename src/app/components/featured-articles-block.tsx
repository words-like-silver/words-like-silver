import Image from "next/image";
import Link from "next/link";

export default function FeaturedArticlesBlock() {
    const articles = [
        "Mountain Sounds is Coming to Shelves - Here's What You Need to Know",
        "Happy Place by Emily Henry",
        "I Spent My First-Ever Adult Vacation at This Gorgeous Hostel in Costa Rica",
    ];
    return (
        <section className="bg-dark-green py-8 text-white">
            <h2 className="text-center text-3xl mb-8">FEATURED</h2>
            <div className="grid grid-cols-3 px-16 gap-8 justify-center">
                {articles.map((article, index) => (
                    <Link href="/" key={index} className="block">
                        <h3 className="italic inline-block w-full font-sailing-club text-center mb-4 text-3xl">
                            travel
                        </h3>
                        <div className="relative aspect-square w-full">
                            <Image
                                src={`https://source.unsplash.com/random?${index}`}
                                fill
                                className="object-cover"
                                alt=""
                            />
                        </div>
                        <div className="text-center text-4xl py-8">
                            {article}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
