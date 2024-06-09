import { Article } from "@/app/lib/cms/types";
import { HeaderType } from "@/app/lib/constants";
import { processSanityBlock } from "@/app/lib/text/process-sanity-block";
import Image from "next/image";
import Link from "next/link";

export default function ArticleHeader({ article }: { article: Article }) {
    console.log(article.title);
    return (
        <>
            <section className="mx-auto my-16 max-w-6xl px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-4 font-sailing-club">
                    {article.categories.map((category) => (
                        <Link
                            href={`/${category.slug.current}`}
                            className="text-xl underline lg:text-3xl"
                            key={category.slug.current}
                        >
                            {category.title}
                        </Link>
                    ))}
                </div>
                <h1 className="my-8 text-balance text-center font-sailing-club text-5xl lg:text-6xl">
                    {processSanityBlock(article.title[0])}
                </h1>
                <p className="text-balance text-center text-xl lg:text-2xl">
                    {article.subhead}
                </p>
                <p className="mt-4 text-center font-sailing-club text-xl italic lg:text-2xl">
                    By <Link href="/about">Grace Smith</Link>
                </p>
                <p className="text-center font-sailing-club text-lg italic lg:text-xl">
                    Published{" "}
                    {new Date(article._createdAt).toLocaleDateString(
                        "default",
                        {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        }
                    )}
                </p>
                <div className="mt-4 flex items-center justify-center gap-4">
                    <div>email</div>
                    <div>insta</div>
                    <div>twitter</div>
                </div>
                {article.headerType === HeaderType.horizontalImage && (
                    <div className="relative mx-auto mb-24 mt-16 aspect-[16/12] w-full max-w-6xl lg:aspect-video">
                        <Image
                            src={article.mainImage.asset.url}
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute -z-10 aspect-square h-full translate-x-1/4 scale-110 lg:translate-x-1/2">
                            <Image
                                src="/images/paper_background.png"
                                alt=""
                                fill
                            />
                        </div>
                    </div>
                )}
                {article.headerType === HeaderType.book && (
                    <div className="relative mx-auto mb-32 mt-20 flex aspect-[16/12] w-full max-w-6xl justify-center lg:aspect-video">
                        <div className="relative mx-10 aspect-book h-full lg:mx-32">
                            <Image
                                src={article.mainImage.asset.url}
                                alt=""
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute -left-20 -top-8 -z-10 aspect-square w-full scale-110 lg:-left-28">
                                <Image
                                    src="/images/paper_background.png"
                                    alt=""
                                    fill
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-20 -z-10 aspect-square w-full scale-110 lg:-right-44">
                                <Image
                                    src="/images/paper_background.png"
                                    alt=""
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
