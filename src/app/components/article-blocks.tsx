import Image from "next/image";

export default function ArticleBlocks() {
    const articles = [
        "5 T-Shirts Currently in My Rotation",
        "5 T-Shirts Currently in My Rotation",
        "5 T-Shirts Currently in My Rotation",
        "5 T-Shirts Currently in My Rotation",
    ];

    return (
        <section className="flex gap-8 mt-16 px-16 lg:text-xl">
            {articles.map((article) => (
                <div className="flex border-black border">
                    <div className="relative aspect-square w-32">
                        <Image
                            src="https://source.unsplash.com/random"
                            fill
                            alt=""
                        />
                    </div>
                    <div className="mt-4 px-4">{article}</div>
                </div>
            ))}
        </section>
    );
}
