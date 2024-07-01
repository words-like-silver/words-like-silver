"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    const handleBackButton = () => {
        const redirectCount = parseInt(
            sessionStorage.getItem("redirectCount") || "0"
        );

        if (redirectCount > 0) {
            router.back();
            // Decrement the redirect count by 2 to account for the increment that happens when the page loads
            sessionStorage.setItem(
                "redirectCount",
                (redirectCount - 2).toString()
            );
        } else {
            router.push("/");
        }
    };

    return (
        <button aria-label="back button" onClick={handleBackButton}>
            <Image
                src="/images/arrow_left.png"
                height={35}
                width={100}
                alt=""
                className="h-6 w-24 hover:opacity-50 lg:h-auto lg:w-auto"
            />
        </button>
    );
}
