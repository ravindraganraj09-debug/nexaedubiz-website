import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth-config";
import { verifySessionToken } from "@/lib/auth-token";

export const dynamic = "force-dynamic";

export async function GET() {
  const token = cookies().get(AUTH_COOKIE)?.value;
  if (!token) {
    return NextResponse.json({ user: null });
  }
  const session = await verifySessionToken(token);
  if (!session) {
    return NextResponse.json({ user: null });
  }
  return NextResponse.json({
    user: { email: session.email, name: session.name ?? "" }
  });
}
