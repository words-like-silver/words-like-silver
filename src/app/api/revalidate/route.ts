import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const crypto = require("crypto");
export async function POST(request: NextRequest) {
    const { VERCEL_SIGNATURE } = process.env;

    if (typeof VERCEL_SIGNATURE != "string") {
        throw new Error("No integration secret found");
    }

    const rawBody = await request.text();
    const rawBodyBuffer = Buffer.from(rawBody, "utf-8");
    const bodySignature = sha1(rawBodyBuffer, VERCEL_SIGNATURE);

    if (bodySignature !== request.headers.get("x-vercel-signature")) {
        console.log("signature didn't match");
        return Response.json({
            code: "invalid_signature",
            error: "signature didn't match",
        });
    }

    await revalidatePath("/", "layout");
    console.log("============ REVALIDATED ALL PATHS =============");
    return NextResponse.json({ revalidated: true, now: Date.now() });
}

function sha1(data: Buffer, secret: string): string {
    return crypto.createHmac("sha1", secret).update(data).digest("hex");
}
