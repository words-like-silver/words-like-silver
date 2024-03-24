import { Body } from "@/app/lib/cms/types";
import Image from "next/image";

export default function ArticleImage({ body }: { body: Body }) {
    if (body._type !== "image") return null;
    const pattern = /^image-[a-f\d]+-(\d+)x(\d+)-\w+$/g;
    let [, widthStr, heightStr] = pattern.exec(body.asset._id) || [];
    const width = Number(widthStr);
    const height = Number(heightStr);
    return (
        <div
            className="relative mx-auto my-20 w-full max-w-6xl"
            style={{ aspectRatio: width / height }}
        >
            <Image src={body.asset.url} className="scale-105" alt="" fill />
            <div className="absolute -z-10 flex h-full w-full justify-center">
                <div className="aspect-square h-full scale-110 ">
                    <Image src="/images/paper_background.png" alt="" fill />
                </div>
            </div>
        </div>
    );
}
