import { Body } from "@/app/lib/cms/types";
import { processSanityBlock } from "@/app/lib/text/process-sanity-block";
import clsx from "clsx";
import Image from "next/image";

export default function ArticleImage({
    body,
    options,
}: {
    body: Body;
    options?: Record<string, any>;
}) {
    if (body._type !== "image") return null;
    const pattern = /^image-[a-f\d]+-(\d+)x(\d+)-\w+$/g;
    let [, widthStr, heightStr] = pattern.exec(body.asset._id) || [];
    const width = Number(widthStr);
    const height = Number(heightStr);
    const background = !options?.noBackground;
    console.log(body);
    return (
        <div
            className={clsx(
                "relative mx-auto w-full max-w-6xl",
                background && "my-20"
            )}
            style={{ aspectRatio: width / height }}
        >
            <Image
                src={body.asset.url}
                className={clsx(background && "scale-[1.02]")}
                alt={body.alt}
                fill
            />
            {!!body.caption && (
                <div className="absolute bottom-4 w-full">
                    <div className="mx-auto w-fit border border-black bg-beige/90 px-4 py-2 text-lg">
                        {processSanityBlock(body.caption[0])}
                    </div>
                </div>
            )}
            {background && (
                <div className="absolute -z-10 flex h-full w-full justify-center">
                    <div className="aspect-square h-full scale-[1.07] ">
                        <Image src="/images/paper_background.png" alt="" fill />
                    </div>
                </div>
            )}
        </div>
    );
}
