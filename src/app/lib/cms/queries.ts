"use server";
import "server-only";
import { cmsUrl } from "../constants";
import { NavigationItem, SanityResponse } from "./types";

export async function getNavigationItems() {
    try {
        const res = await fetch(
            cmsUrl + '?query=*[_type == "navigation_item"]',
            {
                method: "GET",
            }
        );
        const data = (await res.json()) as SanityResponse<NavigationItem>;
        if (data.error) throw new Error(data.error.description);
        return data.result;
    } catch (error) {
        console.error(error);
        return [];
    }
}
