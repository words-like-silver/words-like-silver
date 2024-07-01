import Image from "next/image";

export default function SocialsBar() {
    return (
        <div className="flex gap-2 py-1">
            <a
                href="https://succinctish.substack.com/"
                className="mr-1 transition-transform hover:-rotate-6 hover:scale-110"
            >
                <Image
                    src="/images/email.png"
                    alt="Email icon"
                    height={32}
                    width={32}
                />
            </a>
            <a
                href="http://www.instagram.com/wlsgrace"
                className="transition-transform hover:rotate-6 hover:scale-110"
            >
                <Image
                    src="/images/instagram.png"
                    alt="Instagram icon"
                    height={32}
                    width={32}
                />
            </a>
            <a
                href="https://x.com/wlsgrace"
                className="transition-transform hover:-rotate-6 hover:scale-110"
            >
                <Image
                    src="/images/x.png"
                    alt="X/Twitter icon"
                    height={32}
                    width={32}
                />
            </a>
            <a
                href="http://www.tiktok.com/@wlsgrace"
                className="transition-transform hover:-rotate-6 hover:scale-110"
            >
                <Image
                    src="/images/tiktok.png"
                    alt="Tiktok icon"
                    height={32}
                    width={32}
                />
            </a>
        </div>
    );
}
