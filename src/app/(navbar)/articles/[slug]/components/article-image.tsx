import { Body } from "@/app/lib/cms/types";
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
                className={clsx(background && "scale-105")}
                alt=""
                fill
            />
            {background && (
                <div className="absolute -z-10 flex h-full w-full justify-center">
                    <div className="aspect-square h-full scale-110 ">
                        <Image src="/images/paper_background.png" alt="" fill />
                    </div>
                </div>
            )}
        </div>
    );
}
