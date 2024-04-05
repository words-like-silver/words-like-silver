import { Article } from "@/app/lib/cms/types";
import { HeaderType } from "@/app/lib/constants";
import { processSanityBlock } from "@/app/lib/text/process-sanity-block";
import Image from "next/image";
import Link from "next/link";

export default function ArticleHeader({ article }: { article: Article }) {
    return (
        <>
            <section className="mx-auto my-16 max-w-6xl">
                <div className="flex flex-wrap items-center justify-center gap-4 font-sailing-club">
                    {article.categories.map((category) => (
                        <Link
                            href={`/${category.slug.current}`}
                            className="text-4xl underline"
                            key={category.slug.current}
                        >
                            {category.title}
                        </Link>
                    ))}
                </div>
                <h1
                    className="my-8 text-balance px-8 text-center font-sailing-club text-6xl"
                    dangerouslySetInnerHTML={{
                        __html: processSanityBlock(article.title[0]),
                    }}
                ></h1>
                <p className="text-balance text-center text-2xl">
                    {article.subhead}
                </p>
                <p className="mt-4 text-center font-sailing-club text-2xl italic">
                    By Grace Smith
                </p>
                <p className="text-center font-sailing-club text-2xl italic">
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
                    <div className="relative mx-auto mb-24 mt-16 aspect-video w-full max-w-6xl">
                        <Image
                            src={article.mainImage.asset.url}
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute -z-10 aspect-square h-full translate-x-1/2 scale-110">
                            <Image
                                src="/images/paper_background.png"
                                alt=""
                                fill
                            />
                        </div>
                    </div>
                )}
                {article.headerType === HeaderType.book && (
                    <div className="relative mx-auto mb-32 mt-20 flex aspect-video w-full max-w-6xl justify-center">
                        <div className="relative mx-32 aspect-book h-full">
                            <Image
                                src={article.mainImage.asset.url}
                                alt=""
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute -left-28 -top-8 -z-10 aspect-square w-full scale-110">
                                <Image
                                    src="/images/paper_background.png"
                                    alt=""
                                    fill
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-44 -z-10 aspect-square w-full scale-110">
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
