import Image from "next/image";

export default function BookWidget() {
    return (
        <div className="mx-auto border max-w-[18rem] border-black py-8 px-4">
            <h2 className="text-3xl italic text-center mb-4 font-sailing-club">
                books
            </h2>
            <div className="px-6">
                <div className="relative aspect-book w-full">
                    <Image src="/images/book.png" fill alt="book" />
                </div>
            </div>
            <h3 className="text-3xl text-center my-4">
                Anna K: A Love Story Jenny Lee
            </h3>
            <div className="text-2xl italic font-sailing-club">
                <div className="text-center">my review</div>
                <div className="text-center">all book posts</div>
            </div>
        </div>
    );
}
