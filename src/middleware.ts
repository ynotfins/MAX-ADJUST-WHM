import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const originalHost = request.headers.get("host") ?? "";
    const url = new URL(request.url);

    // Skip middleware for localhost and 127.0.0.1
    if (
        originalHost.startsWith("localhost") ||
        originalHost.startsWith("127.0.0.1")
    ) {
        return NextResponse.next();
    }

    let newHost = originalHost;
    let protocol = url.protocol;
    let redirectNeeded = false;

    // Remove www
    if (originalHost.startsWith("www.")) {
        newHost = originalHost.replace(/^www\./, "");
        redirectNeeded = true;
    }

    // Enforce HTTPS
    if (protocol === "http:") {
        protocol = "https:";
        redirectNeeded = true;
    }

    if (redirectNeeded) {
        const newUrl = `${protocol}//${newHost}${url.pathname}${url.search}`;
        return NextResponse.redirect(newUrl, 308);
    }

    return NextResponse.next();
}
