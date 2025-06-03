import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { leetcodePOTDURL } from "./actions/misc";

export async function middleware(request: NextRequest) {
	const url = await leetcodePOTDURL();
	if (url) return NextResponse.redirect(new URL(url, request.url));
}

export const config = {
	matcher: "/lc-potd",
};
