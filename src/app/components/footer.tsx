import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <footer>
            <div className="grid-cols-[1fr,3fr,1fr] gap-4 bg-dark-green text-2xl text-beige lg:grid">
                <div className="flex flex-col pt-24">
                    <ul className="flex flex-wrap items-center justify-center gap-4 px-4 pb-12 font-sailing-club text-3xl lg:flex-col lg:justify-start lg:px-0">
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
                    <div className="mx-auto h-full w-px bg-beige"></div>
                </div>
                <div className="flex flex-col items-center gap-8 py-24">
                    <p className="px-4 text-center">
                        As a one-person labor of love since 2011, Words Like
                        Silver is made possible only by the support of dedicated
                        readers. If you appreciate my recommendations, I’d
                        appreciate if you’d consider aiding the site with a
                        one-time or loyal donation. <br />
                        Your support makes all the difference.
                    </p>
                    <div>
                        <div className="flex flex-col gap-8 lg:mt-16 lg:flex-row lg:gap-32">
                            <div>
                                <h2 className="mb-4 font-sailing-club text-3xl">
                                    MONTHLY DONATION
                                </h2>
                                <ul className="flex flex-col items-center">
                                    <li>$3/month</li>
                                    <li>$5/month</li>
                                    <li>$7/month</li>
                                    <li>$10/month</li>
                                    <li>$25/month</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-4 text-center font-sailing-club text-3xl">
                                    ONE TIME DONATION
                                </h2>
                                <p className="max-w-44 text-center">
                                    You can also become a one-time supporter
                                    with a donation of any amount.
                                </p>
                            </div>
                        </div>
                        <button className="mx-auto mt-6 block w-fit bg-beige px-12 py-1 font-sailing-club text-3xl text-dark-green">
                            GIVE
                        </button>
                    </div>
                    <p className="mx-auto max-w-3xl px-4 text-center">
                        Subscription numbers also make a significant difference
                        in securing opportunities—so if you regularly peruse
                        Words Like Silver, I’d appreciate if you’d formalize
                        your support and hit subscribe below.
                    </p>
                    <div>
                        <h2 className="mb-4 text-center font-sailing-club text-3xl">
                            SUBSCRIBE TO WORDS LIKE SILVER
                        </h2>
                        <label>
                            <div className="mb-2 text-center font-sailing-club italic">
                                your email address
                            </div>
                            <input
                                type="email"
                                className="w-full px-2 text-center text-black lg:w-[432px]"
                            />
                        </label>
                        <label>
                            <div className="mb-2 mt-4 text-center font-sailing-club italic">
                                phone number
                            </div>
                            <input
                                type="tel"
                                className="w-full px-2 text-center text-black"
                            />
                        </label>
                    </div>
                </div>
                <div className="flex flex-col items-center py-24">
                    <div className="relative mt-12 aspect-square h-52">
                        <Image
                            src="/images/words_logo_mini_beige.png"
                            alt="words like silver logo"
                            fill
                        />
                    </div>
                    <div>
                        <div>^</div>
                        <button className="font-sailing-club text-3xl underline">
                            BACK TO TOP
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-1 text-center font-sailing-club">
                &copy; WORDS LIKE SILVER LLC 2024. READ OUR{" "}
                <Link href="/privacy">PRIVACY NOTICE</Link>,{" "}
                <Link href="/cookie">COOKIE NOTICE</Link>, AND{" "}
                <Link href="/terms">TERMS AND CONDITIONS</Link>
            </div>
        </footer>
    );
}
