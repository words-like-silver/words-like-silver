import Image from "next/image";
export default function Sidebar() {
    return (
        <section className="hidden w-64 pt-12 lg:block">
            <div className="sticky top-0 z-10 border-b border-b-black bg-beige py-6">
                <div className="relative mx-auto aspect-square h-24 ">
                    <Image
                        src="/images/words_logo_mini.png"
                        alt="words like silver logo"
                        fill
                    />
                </div>
            </div>
            <div className="sticky top-36 z-20 hidden h-px -translate-y-px bg-beige lg:block"></div>
            <div className="mt-12 flex flex-col items-center px-8 text-xl ">
                <input className="mb-4 w-full rounded-md border-2 border-black bg-beige px-2" />
                <div>Email insta twitter</div>
                <h2 className="mt-6 text-3xl">SUBSCRIBE</h2>
                <p className="mt-4 border border-black p-4 text-center">
                    Curated reflections on books, travel, style, arts, and more.
                </p>
                <div className="mt-6 font-sailing-club italic underline">
                    newsletters
                </div>
                <div className="font-sailing-club italic underline">
                    RSS feed
                </div>
            </div>
            <div className="sticky top-44 px-8">
                <h2 className="mt-6 text-center text-3xl">SUPPORT</h2>
                <div className="mt-4 border border-black p-4">
                    <p className="text-center">
                        As a one-person labor of love since 2011, Words Like
                        Silver is made possible only by the support of dedicated
                        dedicated readers. If you appreciate my recommendations,
                        I’d be grateful if you’d consider aiding the site’s
                        upkeep and labor with a one-time or loyal donation.{" "}
                        <br />
                        Your support makes all the difference.
                    </p>
                    <ul className="flex flex-col items-center pt-6 font-frys-baskerville">
                        <li>$3/month</li>
                        <li>$5/month</li>
                        <li>$7/month</li>
                        <li>$10/month</li>
                        <li>$25/month</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
