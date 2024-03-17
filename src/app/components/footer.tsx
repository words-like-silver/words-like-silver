import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <footer>
            <div className="text-beige gap-4 lg:grid py-24 text-2xl grid-cols-[1fr,3fr,1fr] bg-dark-green">
                <div>
                    <ul className="flex pb-12 text-3xl justify-center lg:justify-start flex-wrap px-4 lg:px-0 lg:flex-col items-center gap-4">
                        <li>
                            <Link href="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link href="/">FAQ</Link>
                        </li>
                        <li>
                            <Link href="/">NEWSLETTERS</Link>
                        </li>
                        <li>
                            <a>INSTAGRAM</a>
                        </li>
                        <li>
                            <a>TWITTER</a>
                        </li>
                        <li>
                            <a>TIKTOK</a>
                        </li>
                    </ul>
                    <div className="w-px h-full bg-beige mx-auto"></div>
                </div>
                <div className="flex flex-col gap-8 items-center">
                    <p className="text-center font-frys-baskerville px-4">
                        As a one-person labor of love since 2011, Words Like
                        Silver is made possible only by the support of dedicated
                        readers. If you appreciate my recommendations, I’d
                        appreciate if you’d consider aiding the site with a
                        one-time or loyal donation. <br />
                        Your support makes all the difference.
                    </p>
                    <div>
                        <div className="flex-col flex lg:flex-row gap-8 lg:gap-32 lg:mt-16">
                            <div>
                                <h2 className="mb-4 text-3xl">
                                    MONTHLY DONATION
                                </h2>
                                <ul className="font-frys-baskerville flex flex-col items-center">
                                    <li>$3/month</li>
                                    <li>$5/month</li>
                                    <li>$7/month</li>
                                    <li>$10/month</li>
                                    <li>$25/month</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-center mb-4 text-3xl">
                                    ONE TIME DONATION
                                </h2>
                                <p className="text-center font-frys-baskerville max-w-44">
                                    You can also become a one-time supporter
                                    with a donation of any amount.
                                </p>
                            </div>
                        </div>
                        <button className="block bg-beige mt-6 text-dark-green px-12 mx-auto py-1 text-3xl w-fit">
                            GIVE
                        </button>
                    </div>
                    <p className="text-center font-frys-baskerville max-w-3xl mx-auto px-4">
                        Subscription numbers also make a significant difference
                        in securing opportunities—so if you regularly peruse
                        Words Like Silver, I’d appreciate if you’d formalize
                        your support and hit subscribe below.
                    </p>
                    <div>
                        <h2 className="mb-4 text-3xl text-center">
                            SUBSCRIBE TO WORDS LIKE SILVER
                        </h2>
                        <label>
                            <div className="font-sailing-club text-center mb-2 italic">
                                your email address
                            </div>
                            <input
                                type="email"
                                className="w-full lg:w-[432px] text-center px-2 text-black font-frys-baskerville"
                            />
                        </label>
                        <label>
                            <div className="mt-4 font-sailing-club text-center mb-2 italic">
                                phone number
                            </div>
                            <input
                                type="tel"
                                className="text-center w-full px-2 text-black font-frys-baskerville"
                            />
                        </label>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="aspect-square relative h-52 mt-12">
                        <Image
                            src="/images/words_logo_mini_beige.png"
                            alt="words like silver logo"
                            fill
                        />
                    </div>
                    <div>
                        <div>^</div>
                        <button className="underline text-3xl">
                            BACK TO TOP
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center py-1">
                &copy; WORDS LIKE SILVER LLC 2024. READ OUR{" "}
                <Link href="/privacy">PRIVACY NOTICE</Link>,{" "}
                <Link href="/cookie">COOKIE NOTICE</Link>, AND{" "}
                <Link href="/terms">TERMS AND CONDITIONS</Link>
            </div>
        </footer>
    );
}
