import Image from "next/image";
import Link from "next/link";

export default function ArticleBlocks() {
    const articles = [
        "5 T-Shirts Currently in My Rotation",
        "5 T-Shirts Currently in My Rotation",
        "5 T-Shirts Currently in My Rotation",
        "5 T-Shirts Currently in My Rotation",
    ];

    return (
        <section className="gap-8 mt-16 flex px-16 text-lg leading-none">
            {articles.map((article) => (
                <Link href="/" className="flex border-black border">
                    <div className="relative aspect-square w-32">
                        <Image
                            src="https://source.unsplash.com/random"
                            fill
                            alt=""
                        />
                    </div>
                    <div className="pt-4 px-4 pb-2">{article}</div>
                </Link>
            ))}
        </section>
    );
}
