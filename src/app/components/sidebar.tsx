import SocialsBar from "./socials-bar";
export default function Sidebar() {
    return (
        <section className="hidden w-72 text-lg lg:block">
            <div className="flex flex-col items-center bg-beige px-8 pb-6 text-xl ">
                <SocialsBar />
                <div className="mt-6 font-sailing-club italic underline">
                    newsletters
                </div>
                <div className="font-sailing-club italic underline">
                    RSS feed
                </div>
            </div>

            <div className="px-8">
                <h2 className="text-center text-3xl">SUPPORT</h2>
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
                    <ul className="flex flex-col items-center pt-6">
                        <li>$3/month</li>
                        <li>$5/month</li>
                        <li>$7/month</li>
                        <li>$10/month</li>
                        <li>$25/month</li>
                    </ul>
                    <button className="mx-auto mt-2 block rounded-[50%] border border-black px-5 py-2 text-center font-sailing-club italic leading-none">
                        donate
                    </button>
                    <p className="mt-8 text-center">
                        You can also become a one-time supporter with a donation
                        of any amount.
                    </p>
                    <button className="mx-auto mt-2 block rounded-[50%] border border-black px-5 py-2 text-center font-sailing-club italic leading-none">
                        donate
                    </button>
                </div>
            </div>
        </section>
    );
}
