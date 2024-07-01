"use client";

import { useEffect } from "react";

export default function RedirectCounter() {
    useEffect(() => {
        const redirectCount = sessionStorage.getItem("redirectCount");
        const previousUrl = sessionStorage.getItem("previousUrl");

        if (redirectCount && previousUrl !== window.location.href) {
            sessionStorage.setItem(
                "redirectCount",
                (parseInt(redirectCount) + 1).toString()
            );
        } else if (!redirectCount) {
            sessionStorage.setItem("redirectCount", "0");
        }
        sessionStorage.setItem("previousUrl", window.location.href);
    }, []);
    return <></>;
}
