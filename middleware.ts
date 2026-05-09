import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth-config";
import { verifySessionToken } from "@/lib/auth-token";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE)?.value;
  let session = false;
  if (token) {
    const payload = await verifySessionToken(token);
    session = Boolean(payload);
  }

  const { pathname } = request.nextUrl;
  if (session && (pathname === "/login" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup"]
};
