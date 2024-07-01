"use client";

export default function ScrollToTopButton() {
    return (
        <button
            className="font-sailing-club text-3xl underline"
            onClick={() =>
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                })
            }
        >
            BACK TO TOP
        </button>
    );
}
