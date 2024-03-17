import Image from "next/image";

export default function BookCarousel() {
    return (
        <section className="my-8">
            <h2 className="text-center text-3xl mb-8">RECENTLY READ</h2>
            <div className="flex gap-8 overflow-auto">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="relative w-20 aspect-book" key={index}>
                        <Image
                            src={`https://source.unsplash.com/random?${index}`}
                            alt="book"
                            fill
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
